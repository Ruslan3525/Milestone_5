import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  getQuizzes(): Quiz[] {
    return this.quizzes;
  }
  quizzes: Quiz[]= [
    {
      question: 'What is OOP?',
      answer: [
        { option: 'Object-oriented programming is a programming methodology based on representing a program as a collection of objects, each of which is an instance of a certain class, and the classes form an inheritance hierarchy.', correct: true  },
        { option: 'Object-oriented programming - this is the name of any type of programming that uses high-level concepts and, unlike Assembler, which does not work directly with PC memory cells.', correct: false},
        { option: 'Object Oriented Programming is just a pretty concept. If you think about it, it does not carry an additional semantic load, just programmers love abbreviations, because their areas of knowledge look more complicated.', correct: false}
      ]
    },
    {
      question: 'What is a class in Java??',
      answer: [
        { option: 'The level of complexity of the program. All operators are divided into classes depending on the complexity of their use.', correct: false  },
        { option: 'The basic element of object-oriented programming in the Java language.', correct: true},
        { option: 'Just one of the possible names for the variable.', correct: false}
      ]
    },
    {
      question: 'What programming languages do not have OOP?',
      answer: [
        { option: 'C', correct: true  },
        { option: 'C#', correct: false},
        { option: 'Java', correct: false}
      ]
    },
    {
      question: 'How to declare a class in code?',
      answer: [
        { option: 'select * from class MyClass {}', correct: false  },
        { option: 'class MyClass {}', correct: true},
        { option: 'new class MyClass {}', correct: false}
      ]
    },
    {
      question: 'What is the NEW operator used for?',
      answer: [
        { option: 'To create a new variable.', correct: false  },
        { option: 'To declare a new class.', correct: false},
        { option: 'To create an instance of a class.', correct: true}
      ]
    },
    {
      question: 'What does the extends keyword mean?',
      answer: [
        { option: 'That it is an additional module of a class that extends its properties.', correct: false  },
        { option: 'That this class inherits from another.', correct: true},
        { option: 'That the two classes are doing the same thing.', correct: false}
      ]
    },
    {
      question: 'What does method overloading mean in Java? (Overload)',
      answer: [
        { option: 'Changing the behavior of a class method relative to its parent.', correct: false  },
        { option: 'Changing the behavior of a class method relative to a child.', correct: false},
        { option: 'Several methods with the same name but different set of parameters.', correct: true}
      ]
    },
    {
      question: 'What does method override in Java (override) mean?',
      answer: [
        { option: 'Changing the behavior of a class method relative to its parent.', correct: true  },
        { option: 'Changing the behavior of a class method relative to a child.', correct: false},
        { option: 'Several methods with the same name but different set of parameters.', correct: false}
      ]
    },
    {
      question: 'What is the difference between a static class method and a regular class method?',
      answer: [
        { option: 'A static method of a class can be called only inside the class, and a normal method can be called anywhere in the code.', correct: false  },
        { option: 'A normal class method works from a class object, and a static method works from the entire class.', correct: true},
        { option: 'A normal class method can be overloaded, but a static method cannot.', correct: false}
      ]
    },
    {
      question: 'What is the "this" keyword for?',
      answer: [
        { option: 'This is the keyword for calling a normal method within a static method. It cannot be omitted, otherwise the call will not work and there will be an error.', correct: false  },
        { option: 'It is a pointer to an overridden class method. It cannot be omitted when called, otherwise the override will not work.', correct: false},
        { option: 'It is a pointer to the current class object within the class itself. It can be omitted when calling a class method, but it is best not to.', correct: true}
      ]
    }
  ]

  constructor() { }

  qetQuizzes(){
    return this.quizzes;
  }
}
