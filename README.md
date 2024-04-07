<p align="center">
  <a href="https://rafer.dev/">
  <img width="auto" height="220px" src="./public/logo-250x250.png" alt="Project logo"/>
  </a>
</p>

<h3 align="center">Raferdev Landing Page</h3>

<div align="center">

[![Build and Deploy](https://github.com/raferdev/landing-page/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/raferdev/landing-page/actions/workflows/deploy.yml)
[![Playwright Tests](https://github.com/raferdev/landing-page/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/raferdev/landing-page/actions/workflows/tests.yml)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Built Using](#built_using)
- [Contribute](#contribute)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

In a moment, this is a simple static landing page, but the main idea of this project is to create all the web flow agents present in a good server-hosted web app, like a cloud provider, remote access, a containarized environment, automated CI/CD, a reverve proxy with nginx, UI tests, UI documentation, the frontend development itself, and design notions.

- Server: AWS: EC2 (t4g-small instance), Elastic Load Balancer, Route 53, and Certificate Manager to create the domain, track, and access the server. The server itself, the RHEL-9.2.0 system, uses Nginx as a reverse proxy to deliver a static domain or storybook.domain and configure all HTTP rules and headers.
- CI/CD: Github Actions: Run tests respecting the push branch rules, deploy the pipeline that runs the build, save the build artifacts, and deploy these artifacts on the server, starting the nginx container.
- Frontent: Nextjs plus Tailwind, and Storybook with Nextjs and Tailwind plugins.

docs: [storybook.rafer.dev](https://storybook.rafer.dev)

## ⛏️ Built Using <a name = "built_using"></a>

- [NextJS](https://nextjs.org/) - The React Framework for the Web
- [Tailwind](https://tailwindcss.com/) - Build modern websites without ever leaving your HTML
- [Typescript](https://developer.mozilla.org/pt-BR/docs/Web/typescript) - Javascript with super powers
- [Storybook](https://storybook.js.org/) - Build UIs without the grunt work
- [Github Actions](https://github.com/features/actions) - Automate your workflow from idea to production
- [Playwright](https://storybook.js.org/) - Reliable end-to-end testing for modern web apps

## 💙 Contribute <a name = "contribute"></a>

- I would love to hear some tips, issues, ideas that you see. You can open an issue or report a security break, and if applicable fork from development branch to do a pr to main branch.

## ✍️ Authors <a name = "authors"></a>

- [@raferdev](https://github.com/raferdev) - idea & build
