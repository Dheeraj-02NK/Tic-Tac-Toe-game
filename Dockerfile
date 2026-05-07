# Use the official Nginx image as the base image
FROM nginx:latest

# Remove the default Nginx HTML files
RUN rm -rf /usr/share/nginx/html/*

# Copy the Tic-Tac-Toe app files to the Nginx default directory
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js

# Expose port 80 to allow access to the app
EXPOSE 80


#docker build -t tic-tac-toe-app .
#docker run -d -p 80:80 --name tic-tac-toe-container tic-tac-toe-app

#docker start tic-tac-toe-container
#docker run -d -p 80:80 --name tic-tac-toe-container tic-tac-toe-app
#docker ps
#docker update --restart unless-stopped tic-tac-toe-container