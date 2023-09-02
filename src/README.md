<h1>GitHub User Details - React Application</h1>

<p>This is a simple React application that allows to input a GitHub username and display details of that user, including their profile picture, name, location, bio and a list of repositories. The application utilies the GitHub REAST API to retrieve user data and their repositories. </p>

<h3>How to Run the Application</h3>
<p>Follow these steps to run the application on your local computer:</p>

<li>First, you need to install Node.js on your computer if it˙s not already installed</li>
<li>After installing Node.js, you can use the <b>˙create-react-app˙</b>command to create a new project. Open the terminal and execute the following command: <b>npx create-react-app github-user-details</b></li>
<li>Once the project is created, download all files from this GitHub repository and replace the corresponding files in your project</li>
<li>To run the application, use the following command: <b>npm start</b></li>

<p>The application will automatically start in your web browser at <b>˙http://localhost:3000/˙</b></p>

<h3>How the Application Works</h3>
<p>The application consist of the two parts:</p>
<ol>
<li><b>User Input Form:</b> User can input a GitHub username into an input field and click the "Find" button. The username can be automatically reconized from the GitHub URL, but users can change it if necessary.</li>
<li><b>Display User Details:</b> After the user is found, the application will retrieve and display details of the user, including their profile picture, name, location, bio and list of repositories. There is also a "Reset" button option that allows cleaning the current state and returning to the user input form.</li>
</ol>

<h3>Application Structure</h3>
<p>The application consist of several React components:</p>
<ul>
<li><b>˙App.js˙</b>: The main component that manages the application´s state and communicates with the GitHub REST API.</li>
<li><b>˙UsersForms.js˙</b>: A component that displays the user input form.</li>
<li><b>˙UserDetails.js˙</b>: A component that displays user details.</li>
<li><b>˙RepositoryList.js˙</b>: A component that displays a list of user repositories.</li>
</ul>
