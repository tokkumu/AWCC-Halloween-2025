import "./App.css";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <div>
        {data.map((path) => (
          <div>
            <h1>{path.title}</h1>
            <ul>
              {path.challenges.map((challenge) => (
                <li>
                  <p
                    className="challenge"
                    dangerouslySetInnerHTML={{ __html: challenge.challenge }}
                  />
                  {challenge.notes ? (
                    <small
                      className="notes"
                      dangerouslySetInnerHTML={{
                        __html: `- ${challenge.notes}`,
                      }}
                    />
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
