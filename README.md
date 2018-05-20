# Typescript Data Structure

This is Typescript Data Structure project, but It's not aim to Fast, Light, and Powerful implementation.

## Motivation
This project aims to show how Typescript (Typed Language) solves well-known software problem. That's why This project implements data structures.

This project want shows OOP(Object-ed-Programming) with Typescript.

This project want shows modern development methodology TDD(Test-Driven Development), BDD(Behavior-Driven Development).

This project want shows How to manage software health continuously.

Build / Test Automation ( with Code coverage Report) would shows current status of software health.
 

## Data Structures

- [x] DataStore<T> Test Specs
- [x] DataStore<T> Implementations
- [x] Stack<T> Test Specs
- [x] Stack<T> Implementations
- [x] Queue<T> Test Specs
- [x] Queue<T> Implementations
- [x] List<T> Test Specs
- [x] List<T> Implementations
- [] LinkedList<T> Test Specs
- [] LinkedList<T> Implementations
- [] Search Algorithm Test Specs
- [] Search Algorithm Implementations
- [] Sort Algorithm Test Specs
- [] Sort Algorithm Implementations

#### about type DataStore<T>
DataStore<T> is 'Abstraction of data storage' generic type of this project.

Array [] is used as data storage in general data structure. Array is simple, fast type itself, but Consumer should manage array index and implements common interface repeat.

DataStore<T> uses Array internally, and provide conceptual interface to Consumer. This design approach makes SW more manageable. 


### Installing

```
npm run setup
```

### Running the tests

```
npm test
```

test reports only.

```
npm run test-with-coverage
```
will generates coverage reports with test reports.


### And coding style tests

Writes Test specs according by [Specification by Example](https://www.thoughtworks.com/insights/blog/specification-example) that would be [Living Documentation](https://leanpub.com/livingdocumentation).

```
Given
When
Then
```
as possible.


## Code documentation
[Typedoc](http://typedoc.org/) would generates code documents from code comments.

```
npm run docs
```


## Deployment

This project setup deployments automatically. [Travis-CI](https://travis-ci.org/) and [Github release](https://github.com/vandbt/typescript-datastructure/releases).

### Travis CI status
![travis](https://github.com/vandbt/typescript-datastructure/blob/master/travis-ci.png)


### Testing reports 
publish on [Github pages https://vandbt.github.io/typescript-datastructure/](https://vandbt.github.io/typescript-datastructure/).
![testing reports](https://github.com/vandbt/typescript-datastructure/blob/master/testing.png)


### Coverage reports
publish on [Github pages under ./coverage https://vandbt.github.io/typescript-datastructure/coverage](https://vandbt.github.io/typescript-datastructure/coverage).

![coverage reports](https://github.com/vandbt/typescript-datastructure/blob/master/coverage.png)


## Built With

* [Typescript](https://www.typescriptlang.org/) - The language used
* [Node](https://nodejs.org/) - The build and dev environment
* [NPM](https://www.npmjs.com/) - Package Management
* [Mocha](https://mochajs.org/) - Used to Test framework
* [Chai](http://www.chaijs.com/) - Used to TDD/BDD assertion library
* [istanbul](https://istanbul.js.org/) - Used to test coverage
* [Typedoc](http://typedoc.org/) - Used to code document
* [Travis CI](https://travis-ci.org/) - Used to Continuos Integration


## Knowledge With
* OOP (Object-Oriented Programming / Design)
* TDD (Test-Driven Development)
* BDD (Behavior-Driven Development)
* Agile


## Versioning

Hope to follow [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/vandbt/typescript-datastructure/tags). 

## Authors

* **SC** - [vandbt](https://github.com/vandbt)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* TBD
