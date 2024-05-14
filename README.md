# VolunteerHub

Welcome to VolunteerHub, your go-to platform for connecting volunteers with meaningful opportunities to make a difference.

## Live Site URL
Visit our live site at [VolunteerHub](https://volunteerhub-f67d8.web.app/)

## Features
- **User Authentication**: Secure login and signup functionality to ensure a safe environment for all users.
- **Private Routes**: Protect sensitive pages and ensure only authenticated users can access them.
- **Volunteer Management**: Manage volunteer opportunities efficiently with options to add, update, and delete volunteer posts.
- **Detailed Information**: View detailed information about each volunteer opportunity, including how to get involved.
- **User-Specific Data**: Access and manage volunteer posts specific to a user through email-based routes.

## Technologies Used
- **React Router**: For seamless navigation and route management.
- **Leaflet**: To integrate interactive maps for locating volunteer opportunities.
- **React Slick**: For creating responsive and touch-friendly carousels.
- **Mamba UI**: Utilized for designing user-friendly interfaces.
- **Daisy UI**: For elegant and customizable UI components.

## Project Structure
```bash
src/
├── Home/
│   └── Home.jsx
├── Root/
│   └── Root.jsx
├── Login/
│   └── Login.jsx
├── SignUp/
│   └── SignUp.jsx
├── Pages/
│   ├── NeedPage.jsx
│   ├── ManageVolunteer.jsx
│   ├── AddVolunteer.jsx
│   ├── DetailsPage.jsx
│   ├── BeAVolunteer.jsx
│   └── UpdatePost.jsx
├── Error/
│   └── Error.jsx
├── Routes/
│   ├── PrivateRoute.jsx
│   └── routes.js
└── index.js
