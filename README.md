# Project Title: Horizontal Scroll Cards with File Upload and Attachment Counter

## Description
This project is a React.js application that provides a horizontally scrollable card interface with file upload functionality. Files can be uploaded via a modal, and the total number of uploaded attachments is dynamically displayed.

## Features
- **Horizontal Scrollable Cards**: Provides a single-page layout with horizontally scrollable cards.
- **File Attachment Modal**: Modal opens on clicking "attachments," enabling multiple file uploads.
- **File List with Extensions**: Uploaded files are displayed with their original name and extension.
- **File Storage API**: Built with Node.js and MongoDB to store file metadata.
- **Attachment Counter**: Shows the total number of uploaded attachments in each card.

## Project Structure

### Frontend
- **React Components**:
  - `HorizontalScrollContainer`: Main container for the horizontally scrollable cards.
  - `Card`: Represents each individual card.
  - `Modal`: Handles file uploads, previews, and displays uploaded files in a list.
  - `FileList`: Lists uploaded files with name and extension.
- **File Upload Flow**: The user selects files via the modal, and files are displayed with previews before uploading to the backend.

### Backend
- **Node.js and MongoDB**:
  - `MongoClient` is used to connect to MongoDB, utilizing GridFS for file storage.
  - **API Endpoints**:
    - `GET /api/files`: Fetches metadata of all uploaded files.
    - `POST /api/upload`: Allows multiple file uploads and saves file metadata to MongoDB.

## Getting Started

## [Live-Site-Link](https://jade-tanuki-6bb9d7.netlify.app/)
## [server-side-Link](https://github.com/sajjadhussains/card_scroll_server)
### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/yourprojectname.git
   cd yourprojectname
