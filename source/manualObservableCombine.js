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

  function delay(ms) {
    const inputObservable = this;

    const outPutObservable = createObservable(function (observer) {
      return inputObservable.subscribe({
        next: function (data) {
          setTimeout(function () {
            observer.next(data)
          }, ms);
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
      filter: filter,
      delay: delay
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

  arrayObservable
    .filter(item => item !== 1)
    .map(item => item * 2)
    .delay(500)
    .subscribe(observer);


};
