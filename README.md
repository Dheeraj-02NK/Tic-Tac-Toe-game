# Tic-Tac-Toe Game

## Description
This is a simple implementation of the classic Tic-Tac-Toe game. The game allows two players to take turns marking spaces in a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

## Features
- Interactive gameplay for two players.
- Simple and clean user interface.
- Lightweight and easy to run.

## Files in the Project
- `index.html`: The main HTML file for the game.
- `style.css`: Contains the styles for the game.
- `script.js`: Contains the game logic and interactivity.
- `Dockerfile`: Used to containerize the application.
- `pod.yaml`: Kubernetes configuration for deploying the application.
- `kubernetes_demo_commands.txt`: Commands for Kubernetes demo.

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/Dheeraj-02NK/Tic-Tac-Toe-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Tic-Tac-Toe-game
   ```
3. Open `index.html` in your browser to play the game.

## Docker Instructions
1. Build the Docker image:
   ```bash
   docker build -t tic-tac-toe .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 8080:80 tic-tac-toe
   ```
3. Open your browser and go to `http://localhost:8080` to play the game.

## Kubernetes Deployment
1. Apply the Kubernetes configuration:
   ```bash
   kubectl apply -f pod.yaml
   ```
2. Check the status of the pod:
   ```bash
   kubectl get pods
   ```
3. Forward the port to access the application:
   ```bash
   kubectl port-forward pod/<pod-name> 8080:80
   ```

## License
This project is licensed under the MIT License.