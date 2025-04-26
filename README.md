# Scatman-Faruk-Jhon Discord Bot
Scatman-Faruk-Jhon is a Discord bot designed to provide various functionalities, including command handling, permission-based access, and Dockerized deployment for easy hosting. You can use it as is or use it as a template for programming other Discord Bots.

## Features

- **Command Handling**: Modular command structure with commands like `help`, `hello`, `close`, `reboot`, and `perm`.
- **Permission Levels**: Commands are restricted based on user permission levels.
- **Dockerized Deployment**: Easily deploy the bot using Docker with the provided `Dockerfile` and GitHub Actions workflow.
- **Customizable Configuration**: Configure the bot using a `config.json` file.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/scatman-faruk-jhon-discord-bot.git
    cd scatman-faruk-jhon-discord-bot
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `config.json` file in the root directory with the following structure:
    ```json
    {
      "token": "YOUR_DISCORD_BOT_TOKEN",
      "prefix": "!",
      "botName": "Scatman-Faruk-Jhon",
      "owner": "YOUR_DISCORD_USER_ID",
      "require_tag_before_prefix": false,
      "bot_id": "BOT_TAG",
      "status_message": "Online and ready!",
      "status": {
         "online": "online"
      },
      "log-Commands": true,
      "log-Errors": true
    }
    ```

4. Run the bot:
    ```bash
    node main.js
    ```

## Commands

| Command   | Description                          | Permission Level |
|-----------|--------------------------------------|------------------|
| `help`    | Lists all available commands.        | 0                |
| `hello`   | Sends "Hello World!" message.        | 5                |
| `close`   | Shuts down the bot.                  | 4                |
| `reboot`  | Restarts the bot.                    | 4                |
| `perm`    | Displays the user's permission level.| 0                |

## Deployment

### Docker Deployment

1. Build the Docker image:
    ```bash
    docker build -t scatman-faruk-jhon .
    ```

2. Run the Docker container:
    ```bash
    docker run -d --name scatman-faruk-jhon scatman-faruk-jhon
    ```

### GitHub Actions Workflow

The repository includes a GitHub Actions workflow for Dockerized deployment. The workflow is located at `.github/workflows/dockerized-deployment.yml`. It automates the following steps:
- Builds and packages the Docker image.
- Uploads the Docker image to a remote server.
- Deploys the Docker container on the server.

For more details about the workflow structure and its key steps, refer to the document [here.](.github/workflows/README)

## Development

### Adding New Commands

1. Create a new file in the `commands` directory, e.g., `newCommand.js`.
2. Use the following template:
    ```js
    exports.run = (bot, message, args, permlvl) => {
         // Command logic here
    };

    exports.properties = {
         name: 'newCommand',
         permlvl: 0,
         description: 'Description of the command.',
         usage: 'newCommand [args]'
    };
    ```

3. The bot will automatically load the new command on startup.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](./LICENSE) file for details.
