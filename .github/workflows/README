# GitHub Actions Workflows

This directory contains the GitHub Actions workflows for the project. GitHub Actions is a CI/CD platform that allows you to automate your build, test, and deployment pipelines.

## Dockerized Deployment Workflow

The `dockerized-deployment.yml` file defines a workflow for building, packaging, uploading, and deploying a Dockerized application. It is triggered by a manual dispatch or when a new release is created.

### Workflow Structure

- **name**: Dockerized Application Deployment
- **on**: 
    - `workflow_dispatch`: Manually trigger the workflow.
    - `release`: Triggered when a new release is created.
- **jobs**: 
    - **build**: Builds and packages the Docker image.
    - **upload**: Uploads the Docker image to a remote server.
    - **deploy**: Deploys the Docker image on the remote server.

### Key Steps

#### Build Job
1. **Checkout repository**: Clones the repository.
2. **Import Bot Config File**: Creates a JSON configuration file.
3. **Build Docker Image**: Builds and saves the Docker image.
4. **Compress Docker Image**: Compresses the Docker image for upload.
5. **Upload artifact**: Stores the compressed Docker image as an artifact.

#### Upload Job
1. **Download artifact**: Retrieves the compressed Docker image.
2. **Upload to Server**: Transfers the compressed image to the remote server.

#### Deploy Job
1. **Stop and Remove Existing Container**: Stops and removes the running Docker container on the server.
2. **Deploy New Docker Image**: Extracts, loads, and runs the new Docker image on the server.

### Benefits

This workflow automates the entire deployment process, ensuring consistency and reducing manual effort. It is particularly useful for projects that rely on Dockerized applications.

### Example Workflow File

Refer to the `dockerized-deployment.yml` file for the complete implementation.
