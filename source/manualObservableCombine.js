export default function () {

  function map(mapFn) {
    const inputObservable = this;

    const outPutObservable = createObservable(function (observer) {
      return inputObservable.subscribe({
        next: function (data) {
          return observer.next(mapFn(data));
        },
        done: observer.done,
        error: observer.error
      });
    });

    return outPutObservable;
  }

  function filter(filterFn) {
    const inputObservable = this;

    const outPutObservable = createObservable(function (observer) {
      return inputObservable.subscribe({
        next: function (data) {
          return filterFn(data) ? observer.next(data) : undefined;
        },
        done: observer.done,
        error: observer.error
      });
    });

    return outPutObservable;
  }

  function createObservable(fn) {
    return {
      subscribe: fn,
      map: map,
      filter: filter
    };
  }

  const observer = {
    next: function (data) {
      console.log(data);
    },
    done: function () {
      console.log('DONE');
    },
    error: function (error) {
      console.error('error:', error);
    }
  };

  const arrayObservable = createObservable(
    function (observer) {
      [1, 2, 3, 4, 5].forEach(observer.next);
      observer.done();
    }
  );

  const timeOutObservable = createObservable(
    function (observer) {
      ['a', 'b', 'c', 'd', 'e'].forEach(function (item) {
        setTimeout(function () {
          observer.next(item);
        }, 1000);
      });
      // observer.done();
    }
  );


  arrayObservable
    .filter(item => item !== 5 && item !== 1)
    .map(item => item * 2)
    .subscribe(observer);

  // timeOutObservable
  //   .map(item => item + '-haha')
  //   .subscribe(observer);


};
