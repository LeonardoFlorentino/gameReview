# [Luby Software](https://www.luby.com.br/en/home/) challenge

This project was developed based on a selective processing for a job application at the company [Luby Software](https://www.luby.com.br/en/home/), in Brazil, which established the requirements for this task, named [ReactJS Challenge](https://github.com/lubysoftware/join/tree/react). The web application was a PWA (Progressive Web App) which works based on the [GITHUB API documentation](https://docs.github.com/en/rest), with the following implemented criterias:

## Web application prototype

The prototype of the application was enabled by this [link](https://xd.adobe.com/view/1798f30c-7746-444c-bffa-91b29835eef5-42cb/) as a reference for the layout and functionality.

### Non functional requirements

## <ul>
 <li> - [x] The application must use reactjs</li>
 <li> - [x]  You must manage your routes with react-router.</li>
 <li> - [x] You must manage the state of the application with redux or Context Api </li>
 <li> - [x]  To style the app, we'd love to see you using styled components </li>
 <li> - [x]  We'd love to see you using Typescript to type the data </li>
</ul>
<!-- ![reactjs](https://github.com/LeonardoFlorentino/UserProfileGit/blob/main/public/demo/react.gif) -->

<!-- ## <ul><li> - [x]  You must manage your routes with react-router.</li></ul> -->
<!-- ![routes](https://github.com/LeonardoFlorentino/UserProfileGit/blob/main/public/demo/routes.gif) -->

<!-- ## <ul><li> - [ ] You must manage the state of the application with redux or Context Api </li></ul> -->
<!-- ![redux-context](https://github.com/LeonardoFlorentino/UserProfileGit/blob/main/public/demo/react.gif) -->
<!-- 
## <ul><li> - [x]  To style the app, we'd love to see you using styled components </li></ul> -->
<!-- ![styled-components](https://github.com/LeonardoFlorentino/UserProfileGit/blob/main/public/demo/styled-components01.gif) -->

<!-- ## <ul><li> - [x]  We'd love to see you using Typescript to type the data </li></ul> -->
<!-- ![typescript](https://github.com/LeonardoFlorentino/UserProfileGit/blob/main/public/demo/typescript01.gif) -->


 
### Functional requirements

## <ul>
 <li>- [x] You must allow a user to be authenticated by searching for the github username </li>
<li>- [x]  You must store the information for (login, name, email, location, company, bio, avatar_url, followers_url, following_url, organizations_url, starred_url, public_repos, public_gists, followers, following)
</li>

<br/>
<img src="https://github.com/LeonardoFlorentino/UserProfileGit/blob/main/public/demo/login.gif" alt="login" width="100%">

 <li>- [x]  You must have tabbed browsing with items ("Home", "Repositories", "Followers", "Following")</li>
<li>- [x] When clicked on the tabs, the respective listings of ("Home", Repositories: repos_url, Followers: followers_url and Following: following_url) should be displayed 

 </li>
 <br/>
<img src="https://github.com/LeonardoFlorentino/UserProfileGit/blob/main/public/demo/navegation.gif" alt="navegation" width="100%">

 <li>- [x] When the user is inside a follower or following tab, you must have a button that makes that user the main application, replacing the user saved in the authentication with the current screen user </li>

 <br/>
<img src="https://github.com/LeonardoFlorentino/UserProfileGit/blob/main/public/demo/changeUser.gif" alt="change user" width="100%">

<li>- [x] On the home screen, you should have a button that allows the user to exit the application, redirecting him to the authentication screen </li></ul>

<br/>
<img src="https://github.com/LeonardoFlorentino/UserProfileGit/blob/main/public/demo/logout.gif" alt="logout" width="100%">

<li>- [x] On the home screen, you should only render the prototype information if the information actually exists in the authentication request's return</li>

<br/>
<img src="https://github.com/LeonardoFlorentino/UserProfileGit/blob/main/public/demo/userNotFound.gif" alt="user not found" width="100%">
</ul>



## Technologies

This project has been developed with the following technologies:

- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [react-router-dom](https://yarnpkg.com/package/react-router-dom)
- [react-paginate](https://yarnpkg.com/package/react-paginate)

