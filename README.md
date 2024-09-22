# PetBnB

Where pets vacation while you're away

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

PetBnB is a platform that connects pet owners with trusted local hosts, offering safe, comfortable stays for cats and dogs in real homes while their humans are away.

## Features

### 1. User Profiles

- **Pet Owner Profile**
  - Basic personal information
  - Pet information (type, breed, age, special needs)
- **Host Profile**
  - Personal information
  - Home details (size, yard, pet-friendly features)
  - Availability calendar

### 2. Listing Creation and Search

- **Hosts can create listings with:**
  - Photos of the space
  - Description
  - Pet types accepted (cats/dogs)
  - Pricing
  - House rules
- **Pet owners can search listings by:**
  - Location
  - Dates
  - Pet type (cat/dog)
  - Price range

### 3. Booking System

- Simple request-to-book feature
- Instant booking option for select listings
- Basic payment integration (e.g., Stripe)

### 4. Messaging System

- Allow pet owners and hosts to communicate
- Notification system for new messages, booking requests, etc.

### 5. Review System

- Both pet owners and hosts can leave reviews after a stay

### 6. Basic Admin Panel

- Manage users, listings, and bookings
- Handle disputes and issues

### 7. Simple Onboarding Process

- Quick sign-up using email or social media accounts
- Guided listing creation for hosts
- Easy-to-follow booking process for pet owners

### 8. Mobile Responsiveness

- Ensure the platform works well on both desktop and mobile devices

### 9. Help Center

- FAQ section
- Contact form for support

## Getting Started

### Prerequisites

- Node.js
- Go
- PostgreSQL

### Installation

1. Clone the repo
   ```
   git clone https://github.com/niawjunior/petbnb.git
   ```
2. Install NPM packages
   ```
   cd petbnb/frontend
   npm install
   ```
3. Set up your environment variables
4. Run the development server
   ```
   npm run dev
   ```

## Usage

[Provide instructions on how to use the platform, both for pet owners and hosts]

## Technology Stack

- Frontend: Next.js, Material-UI (MUI)
- Backend: Go
- Database: PostgreSQL
- BaaS: Supabase

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

Project Link: [https://github.com/niawjunior/petbnb](https://github.com/yourusername/petbnb)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
