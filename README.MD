# Electron Quick Start Example

This repository serves as an example of how to quickly set up and run an Electron application.

The application comprises two main parts:

- **UI**: Built with Angular, this part of the application provides the user interface.
- **Background tasks**: Powered by Nest.js, this part handles background tasks.

Communication between the user interface and the background task service is facilitated through a combination of classic HTTP requests and websocket messages.

To run this example, follow these steps:

1. Navigate to the `ui` directory and install dependencies using the following command: `npm i`. Then, build the UI with `npm run build`.
2. Similarly, navigate to the `background` directory and install dependencies using `npm i`. Then, build the background tasks with `npm run build`.
3. Finally, in the main directory, run the command `npm start` to start the Electron application.

Please ensure you have Node.js and npm installed on your system before running these commands.
