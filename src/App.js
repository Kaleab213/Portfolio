import React from 'react';
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Kaleab Tibebu</h1>
        <h3 className="whiteguy">Self-driven Software Engineering Student with a passion for problem solving and social impact.</h3>
      </header>
      <main>
        <section>
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>Software Engineering Intern</h3>
              <p>PSYANN graphics and advertisement</p>
              <p>08/2023 - present</p>
              <p>Addis Ababa, Ethiopia</p>
              <p>• Developed full-stack websites and mobile applications.</p>
            </li>
            <li>
              <h3>Machine Learning Engineer</h3>
              <p>Minnovation</p>
              <p>02/2023 - present</p>
              <p>Remote</p>
              <p>• Worked on building machine learning models and actively participated in projects involving artificial intelligence.</p>
            </li>
            <li>
              <h3>Data Structures and Algorithms Trainee</h3>
              <p>A2SV | Africa to Silicon Valley</p>
              <p>03/2023 - present</p>
              <p>Addis Ababa, Ethiopia</p>
              <p>• Achieved a remarkable record by ranking number 1 in 7 contests, surpassing more than 120 participants in each competition.</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>ArifGrade</h3>
              <p>
                Developed a Flutter app for Ethiopian students, enabling access to past university entrance exams and providing a simulated exam environment for practice.
              </p>
            </li>
            <li>
              <h3>face-classification</h3>
              <p>
                Built a computer vision model to classify images of myself and a friend. Utilized pre-trained MobileNetV2 Neural Network architecture.
              </p>
            </li>
            <li>
              <h3>SecureAuth</h3>
              <p>
                Created an authentication system using Django that employs Advanced Encryption Standard for data encryption and bcrypt for password hashing.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <p>
            Bachelor of Science in Software Engineering
            <br />
            Addis Ababa University, Expected Graduation: May 2025
          </p>
        </section>
        <section>
          <h2>Skills</h2>
          <p>
            Python, Java, C++, JavaScript, Dart, HTML, CSS, Bootstrap, React, Express.js, Node.js, MongoDb, Firebase,
            Data Structures and Algorithms, Git, Machine Learning, Computer Vision
          </p>
        </section>
        <section>
          <h2>Leadership and Involvement</h2>
          <ul>
            <li>
              <h3>Campus Director</h3>
              <p>Millennium Fellowship</p>
              <p>08/2023 - present</p>
              <p>Addis Ababa, Ethiopia</p>
              <p>• Led a team of 30 members to drive social impact initiatives and projects.</p>
            </li>
            <li>
              <h3>Member</h3>
              <p>Aspire Institute of Leadership</p>
              <p>05/2023 - present</p>
              <p>Remote</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Achievements</h2>
          <ul>
            <li>Solved 250+ LeetCode questions consistently over 120+ consecutive days.</li>
            <li>Earned LinkedIn Python Skill Assessment badge</li>
            <li>Earned LinkedIn Machine Learning Skill Assessment badge</li>
            <li>Achieved the highest score onthe University Entrance Examination among students from my school.</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>© 2023 Kaleab Tibebu</p>
      </footer>
    </div>
  );
}

export default App;