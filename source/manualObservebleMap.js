export default function () {


  function createObservable(fn) {
    return {
      subscribe: fn,
      map: function (mapFn) {
        return createObservable(function (observer) {

          const newObserver = {
            next: function (data) {
              return observer.next(mapFn(data));
            },
            done: observer.done,
            error: observer.error
          };

          return fn(newObserver);
        })
      }
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
    .map(item => item * 2)
    .subscribe(observer);


};
