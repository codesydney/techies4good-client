# Code.Sydney Pro

# The Team
* @promie | Promie Yutasane | DevOps/Web Developer
* @washington-shoji | Washington Shoji | Web Developer
* @brodiehunt | Brodie Hunt | Web Developer
* @engramar | Engramar Bollas | Product Manager

## Tech Stack
### Backend
* NestJS + TypeScript
* Postgres
* AWS (Lambda, API Gateway)
* Serverless Framework (using CloudFormation)

### Frontend
* React + TypeScript
* CSC Deployment

# Team Consensus
* PR approval (at least 1 approval)
* Use of PR submission template

# Issues Register
* [https://github.com/codesydney/techies4good/issues](https://github.com/codesydney/techies4good/issues)

# Kanban Board
* [https://github.com/orgs/codesydney/projects/20](https://github.com/orgs/codesydney/projects/20)

# UX UI
* [[Link to Figma](https://www.figma.com/file/DyT6QcKPcTSnDlm4tKMhWW/USTAA-Directory?type=design&node-id=0-1&mode=design&t=SDr6JpXOMT8gbvj7-0)](https://www.figma.com/design/TX0PBElOrpFTGkliocmiCQ/Techies4Good?node-id=0%3A1&t=rwaILM4OK9Lv1bGj-1)

| Milestones   |
| ------------ |
| **1st Milestone (T4G profile sign up)**: Pretty much like Classified Ads. Anyone can sign up but only the ones who passed the T4G criteria will be published, by default profiles are hidden to public. However, we may need to be creative on the details to be published, perhaps consider reviews, stars, what the community says but as a start just the basics. For the time being, we can start putting the usual stuff (similar to LinkedIn but cut down version). 1st Milestone is pretty much what we will try to statically publish on our existing website (and IMS website) as an interim while waiting for the app. |
| ** 2nd Milestone (Non-Profit/Charity sign up)**: By default, published profile will not expose all details to public. However, serious help seekers can sign up to T4G to see more details about the potential candidate.  |

# Test Site
* https://pro.code.sydney/

## Requirements
* Node 20.13.1 LTS
* NPX 10.x

## Installation
From the **root** directory, run the following command:

```bash
$ npm install
```

### Development Commands
* **`npm run dev`**: Starts the development server using the local backend server (e.g., running on `http://localhost:5000`).
* **`npm run dev:local`**: Starts the development server and connects to a local backend server running at `http://localhost:5000`.
* **`npm run dev:serverless`**: Starts the development server and connects to the Lambda serverless API endpoint.

### Environment Configuration
- **Development**: By default, running `npm run dev` will use the serverless API endpoint. To connect to a local server, use `npm run dev:local`.
- **Production**: When deployed to production, the site will connect to the serverless API endpoint. This ensures that the live site always uses the serverless infrastructure for handling API requests.
