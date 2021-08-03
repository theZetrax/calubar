# Introduction

This file contains all the planned features for this project.

## Date _Mon Aug  2 08:13:33 AM EAT 2021_

Working on the cross platform library. We are going to be installing all the cross platform functions.
We are going to identify each functionality in this pattern.

- Functionality Name
- Functinoality Detail Function

1. Downloading the requested application. User can perform these functionalities
    - Enters an application using the following scheme.
        **Example:** 
        - binmanager-cli add <application_name> <application_url>
        - binmanager-cli add <application_name> <application_url> -d \<description>
    - List all the installed apps.
        **Example:** binmanager-cli -l _or_ binmanager-cli --list
    - Update existing application using the following scheme.
        **Exmaple:** binmanager-cli update <application_name> <application_url>
2. Storing the application in a directory.
    - change application directory
        - binmanager-cli chdir \<directory_path>
        - The application directory has a `appdef.json` file that has all the application definitions
            within the directory.
3. Updating the backend service.
