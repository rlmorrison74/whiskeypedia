# Whiskeypedia <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Whiskeypedia** is a blog app for whiskey and bourbon enthusiasts to discuss their love for the craft. It's built using React and Ruby on Rails._


<br>

## MVP

> 

_MVP for this project is full CRUD on both front and back end with a minimum of 3 tables on the back end._

<br>

### Goals

- _Meet all of my styling expectations set in my Figmas_
- _Develop a clean user interface for comments and subcomments_
- _Grow as a developer during this project_
- _Use a modal somewhere in my project_
- _Use CSS animations to create an attractive user experience_

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _React is a declarative, efficient, and flexible JavaScript library for building user interfaces._ |
|   React Router   | _A standard library for routing in React._ |
|  Ruby on Rails| _An open source framework for Web development in Ruby._ |
|          Material UI | _A library that allows us to import and use different components to create a user interface in React applications._ |
|   React Router DOM| _Enables you to implement dynamic routing in a web app._ |
| Axios  | _A promise-based HTTP Client for node.js and the browser._ |
|  Bcrypt | _The bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every password with a salt._ |
|   JWT| _A pure ruby implementation of the RFC 7519 OAuth JSON Web Token (JWT) standard._ |
|   CORS| _The CORS spec allows web applications to make cross domain AJAX calls without using workarounds such as JSONP._ |
|  ActiveRecord | _Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database._ |
|   PostegresSQL| _A powerful, open source object-relational database system._ |
| Cloudinary  | _Cloudinary's cloud-based servers automate image uploading, resizing, cropping, optimizing, sprite generation and more._ |


<br>

### Client (Front End)

#### Wireframes

![Home](https://github.com/rlmorrison74/whiskeypedia/blob/main/assets/mockups/home.png)

- Home Page

![Posts.jsx](https://github.com/rlmorrison74/whiskeypedia/blob/main/assets/mockups/posts.png)

- Posts Page

![PostDetail.jsx](https://github.com/rlmorrison74/whiskeypedia/blob/main/assets/mockups/post_detail.png)

- Post Detail Page

![PostCreate.jsx](https://github.com/rlmorrison74/whiskeypedia/blob/main/assets/mockups/create_post.png)

- Post Create/Edit Form

![Register.jsx](https://github.com/rlmorrison74/whiskeypedia/blob/main/assets/mockups/sign_up.png)

- Register Form

![About.jsx](https://github.com/rlmorrison74/whiskeypedia/blob/main/assets/mockups/about.png)

- About Page

![Contact.jsx](https://github.com/rlmorrison74/whiskeypedia/blob/main/assets/mockups/contact.png)

- Contact Page

#### Component Tree

![Component Tree ](https://cdn.discordapp.com/attachments/283876599626072064/905108967313768478/unknown.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Comment.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ posts.js
      |__ comments.js
      |__ users.js
|__layouts/
      |__ Layout.jsx
|__screens/
      |__ Home.jsx
      |__ About.jsx
      |__ Contact.jsx
      |__ Register.jsx
      |__ Login.jsx
      |__ Posts.jsx
      |__ PostDetail.jsx
      |__ PostEdit.jsx
      |__ PostCreate.jsx
|__containers/
      |__ MainContainer.jsx
      |__ PostContainer.jsx

```

#### Time Estimates

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | 
| Lay out state in app.js for child components   |    H     |     3 hrs      |          |   
| Set up layout |    H     |     1 hr      |          |    
| Build login/register forms |    H     |     3 hrs      |          |     
| Build contact form |    L     |     3 hrs      |          |     
| Build about screen |    L     |     1 hr     |          |     
| Build home screen |    L     |     2 hrs      |          |     
| Set up MainContainer.jsx state |    H     |     2 hrs      |          |     
| Build Edit |    H     |     3 hrs      |          |     
| Build Create |    H     |     3 hrs      |          |     
| Build PostDetail |    H     |     3 hrs      |          |     
| Build Posts |    H     |     3 hrs      |          |     
| Build back end database |    H     |     3 hrs      |          |     
| Set up back end full CRUD |    H     |     3 hrs      |          |     
| Build Comment functionality |    H     |     5 hrs      |          |
| Set up services folder |    H     |     1 hr      |          |
| Basic Styling of all screens |    H     |     15 hrs      |          |
| Polishing up styling |    H     |     6 hrs      |          |
| CSS Animations |    M     |     6 hrs      |          |
| TOTAL               |          |     66 hrs      |          |     

<br>

### Server (Back End)

#### ERD Model


![ERD](https://cdn.discordapp.com/attachments/283876599626072064/904404172907118632/unknown.png)
<br>

***

## Post-MVP

-_CSS animations on the landing page_

-_Subcomments_

-_Implement a rich text editor_

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
