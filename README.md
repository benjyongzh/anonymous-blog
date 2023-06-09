# Front-end component of Anonymous Blog project

Practice project for MongoDB, ExpressJS, OAuth React and Bootstrap. This is a project based on an assignment in The Odin Project.

This project serves to imitate a social media site where users can login to create posts, comment on posts, and reply to comments. All posts are public.

Users can apply to become Premium members and/or Admins. Premium members are able to see each user's real name, and Admins have the power to delete posts.

This repo is only the Front-end of the project, and it has been deployed on Railway, [here](https://anonymous-blog-production-93e5.up.railway.app/).
<br/>

The back-end site is located [here](http://anonymous-blog-production.up.railway.app).
<br/>

## Learning points:

- Splitting project into React front-end vs ExpressJS API back-end.
- Forcing all logic into back-end, and passing only relevant data to front-end.
- Deploying back-end and front-end separately in Railway, as separate repos.

### Front-end

- React-redux toolkit.
- Redux-persist.
- Using Axios to link to back-end.
- Material Design UI.
- Bootstrap v5.3 with dark theme.
- Creating togglable Dark Mode switch from scratch.
- Minor Bootstrap styling customizations.

### Back-end

- OAuth with passport-local, express-validations and form UX.
- Migrating Bootstrap from v4 to v5.
- Mongoose multi-level populate.
- Mongoose recursive modelling.
- Conditional rendering in Pug.
- Escaping vs unescaping data in Pug.
- Using conditional middlewares alongside express-validator.
- Mongoose multi-level deletion of linked database objects.
- CSRF prevention by sticking to REST rules.
- Expanding DB models for new features.
