## React tailwind boiler plate code 

### `npm start`
### `npm test`
### `npm run build`
### `npm run eject`
A big no no

## Structure
---Src

   `App.tsx  Routing and everything else is managed here. It is directly under src folder for easier access`
   
   `index.tsx Basic index.tsx file. It is directly under src folder for easier access add context providers and other stuff`
   
  
    --------Assets contain all the assets like images, svg ,fonts etc.
 
    --------Images
    --------Styles
    --------Fonts
    ---------- Components folder all the logic is managed here.
         ---------- Common folder holds the components that are used in multiple places without any changes like loading spinner, error page , modals ,common cards etc
         ---------- Container folder holds the base components which are used to make the webpage like Buttons , Cards etc. which are component specific should be stored in relative folder
         ---------- Service folder holds the services like api calls, data fetching etc.
         ---------- types folder holds the types like interfaces, enums etc.
         ---------- Utils folder holds the utility functions like helper functions, etc.
    ----------- Connext folder holds the context providers like auth, language ,ui etc.
    ----------- Screens folder holds the screens like home, about etc the final component is assembled here.
    ----------- Styles folder holds the styles like global styles, etc.
`



   