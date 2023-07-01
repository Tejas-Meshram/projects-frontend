import questions from './data';
import SingleQuestion from './SingleQuestion';

function App() {
  return (
    <main>
      <div className="container">
        <h1 className='title'>Questions and Answers</h1>
        <section>
          {questions.map((question)=> {
            return (
              <SingleQuestion key={question.id} {...question}/>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
