import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Code2, Youtube } from "lucide-react";

const skillIcons = {
  JavaScript: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#F7DF1E" />
      <path
        d="M9 23.3l2.3-1.4c.45.8.86 1.47 1.84 1.47.94 0 1.54-.37 1.54-1.82V12.5h2.84v9.08c0 3-1.76 4.34-4.32 4.34-2.32 0-3.66-1.2-4.2-2.62z"
        fill="#323330"
      />
      <path
        d="M19.3 23l2.3-1.35c.62 1.01 1.42 1.74 2.84 1.74 1.2 0 1.96-.6 1.96-1.42 0-.99-.78-1.34-2.1-1.92l-.72-.31c-2.08-.88-3.46-2-3.46-4.34 0-2.16 1.64-3.8 4.22-3.8 1.84 0 3.14.64 4.08 2.3l-2.24 1.44c-.5-.88-1.02-1.24-1.84-1.24-.84 0-1.38.54-1.38 1.24 0 .86.54 1.22 1.78 1.74l.72.31c2.46 1.05 3.84 2.12 3.84 4.54 0 2.6-2.04 4.02-4.78 4.02-2.68 0-4.42-1.28-5.22-2.95z"
        fill="#323330"
      />
    </svg>
  ),
  TypeScript: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#3178C6" />
      <path
        d="M7 17h3v8h2.4v-8h3v-2H7v2zm11.5 8.2c.7.4 1.54.63 2.44.63 2.42 0 3.84-1.26 3.84-3.14 0-1.68-.96-2.48-2.8-3.16l-.58-.22c-.9-.36-1.28-.58-1.28-1.16 0-.46.36-.82.96-.82.58 0 .96.24 1.3.82l1.52-.98c-.64-1.12-1.52-1.56-2.82-1.56-1.78 0-2.92 1.14-2.92 2.64 0 1.64.96 2.42 2.38 2.96l.58.22c.98.4 1.56.66 1.56 1.32 0 .56-.52.98-1.36.98-1.02 0-1.58-.52-2.02-1.2l-1.58.92c.58 1.14 1.66 2.02 3.42 2.02v-.27z"
        fill="#fff"
      />
    </svg>
  ),
  Python: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path
        d="M15.9 3C14.1 3 12.5 3.2 11 3.5 8.2 4 7.3 5.2 7.3 7v3.3h8.7v1.1H7.3 5.3c-1.8 0-3.5 1.1-4 3.3-.5 2.5-.6 4.1 0 6.7.4 1.9 1.4 3.3 3.2 3.3H7V21.3c0-2.1 1.8-3.9 4-4h8c1.8 0 3.3-1.5 3.3-3.3V7c0-1.7-1.4-2.9-3.3-3.3-1.2-.2-2.5-.4-3.7-.4l.6-.3zM11 5.5c.8 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3z"
        fill="#306998"
      />
      <path
        d="M24.7 11.4v3c0 2.2-1.9 4.1-4 4.1h-8c-1.7 0-3.3 1.6-3.3 3.3v6c0 1.7 1.5 2.7 3.3 3.1 2.2.6 4.4.7 7 0 1.8-.5 3.3-1.4 3.3-3.1v-2.3h-6.7v-1.1h10c1.9 0 2.6-1.3 3.4-3.3.8-2 .8-3.8 0-6.4-.6-1.9-1.7-3.3-3.4-3.3h-1.6zm-4 15c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.8 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3z"
        fill="#FFD43B"
      />
    </svg>
  ),
  // Java: (
  //   <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
  //     <path d="M12.3 23.7s-1.2.7.9 1c2.5.3 3.9.2 6.7-.3 0 0 .7.5 1.8.9-6.3 2.7-14.3-.2-9.4-1.6z" fill="#5382A1"/>
  //     <path d="M11.3 20.5s-1.4 1 .7 1.2c2.7.3 4.9.3 8.6-.4 0 0 .5.5 1.3.8-7.6 2.2-16.2.2-10.6-1.6z" fill="#5382A1"/>
  //     <path d="M17.6 14.5c1.5 1.8-.4 3.4-.4 3.4s4-2 2.2-4.6c-1.7-2.4-3-3.6 4-7.7 0 0-11 2.7-5.8 8.9z" fill="#E76F00"/>
  //     <path d="M25.3 26s.9.8-1 1.4c-3.6 1.1-15.1 1.4-18.3 0-1.2-.5 1-1.2 1.7-1.3.7-.2 1.1-.1 1.1-.1-1.3-.9-8.3 1.8-3.6 2.5 12.9 2.1 23.5-.9 20.1-2.5z" fill="#5382A1"/>
  //     <path d="M12.9 17.1s-5.9 1.4-2.1 1.9c1.6.2 4.8.2 7.8-.1 2.4-.2 4.8-.7 4.8-.7s-.8.4-1.5.8c-6 1.6-17.4.8-14.1-.8 2.8-1.3 5.1-.9 5.1-.9z" fill="#5382A1"/>
  //     <path d="M22.5 22.1c6.1-3.2 3.3-6.2 1.3-5.8-.5.1-.7.2-.7.2s.2-.3.5-.4c3.9-1.4 6.9 4-1.3 6.2 0 0 .1-.1.2-.2z" fill="#5382A1"/>
  //     <path d="M19.4 3s3.4 3.4-3.2 8.5c-5.3 4.1-1.2 6.5 0 9.2-3.1-2.8-5.3-5.2-3.8-7.5C14.6 10.2 20.8 8.7 19.4 3z" fill="#E76F00"/>
  //   </svg>
  // ),
  SQL: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="8" rx="10" ry="4" fill="#00BCF2" opacity="0.2" />
      <ellipse
        cx="16"
        cy="8"
        rx="10"
        ry="4"
        stroke="#00BCF2"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M6 8v8c0 2.2 4.5 4 10 4s10-1.8 10-4V8"
        stroke="#00BCF2"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M6 16v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8"
        stroke="#00BCF2"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="10"
        ry="4"
        stroke="#00BCF2"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  ),
  React: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="3" fill="#61DAFB" />
      <ellipse
        cx="16"
        cy="16"
        rx="13"
        ry="5"
        stroke="#61DAFB"
        strokeWidth="1.3"
        fill="none"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="13"
        ry="5"
        stroke="#61DAFB"
        strokeWidth="1.3"
        fill="none"
        transform="rotate(60 16 16)"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="13"
        ry="5"
        stroke="#61DAFB"
        strokeWidth="1.3"
        fill="none"
        transform="rotate(120 16 16)"
      />
    </svg>
  ),
  "Node.js": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 3l11.3 6.5v13L16 29 4.7 22.5v-13L16 3z"
        fill="#68A063"
        opacity="0.15"
      />
      <path
        d="M16 3l11.3 6.5v13L16 29 4.7 22.5v-13L16 3z"
        stroke="#68A063"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M16 3v13l11.3 6.5"
        stroke="#68A063"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M16 16L4.7 9.5"
        stroke="#68A063"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      <path d="M20 19.5v-6L16 11l-4 2.5v6L16 22l4-2.5z" fill="#68A063" />
    </svg>
  ),
  Express: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path
        d="M4 24h2l2.7-6.7L11.4 24h2L9.7 16l3.4-8h-2L8.7 14.5 6.3 8H4.2l3.4 8L4 24z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M15 24h2V18l5.6 6h2.4L19.5 16 25 8h-2.3L17 14.2V8h-2v16z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  ),
  FastAPI: (
   <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" style={{fill: '#009688'}}/></svg>
  ),
  "Next.js": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="13" fill="currentColor" />
      <path
        d="M13 11v10l8.5-5.5v-1.5L13 11z"
        fill="var(--background, #0a0a0a)"
      />
      <rect
        x="21"
        y="11"
        width="2"
        height="10"
        rx="0.7"
        fill="var(--background, #0a0a0a)"
      />
    </svg>
  ),
  Git: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path
        d="M30.4 14.6L17.4 1.6a2 2 0 0 0-2.8 0L11.8 4.4l3.6 3.6c.8-.3 1.8-.1 2.4.5.7.7.8 1.7.5 2.5l3.4 3.4c.8-.3 1.8-.1 2.5.5a2 2 0 1 1-2.8 2.8c-.7-.7-.9-1.8-.5-2.6l-3.2-3.2V21c.2.1.4.3.6.5a2 2 0 1 1-2.8 0c.2-.2.4-.4.7-.5v-8.7c-.2-.1-.5-.3-.7-.5a2 2 0 0 1-.4-2.2L11.5 6.2 1.6 16.1a2 2 0 0 0 0 2.8l13 13a2 2 0 0 0 2.8 0L30.4 17.4a2 2 0 0 0 0-2.8z"
        fill="#F05033"
      />
    </svg>
  ),
  Docker: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path
        d="M18.6 14.4h2.8v-2.5h-2.8v2.5zm-3.4 0h2.8v-2.5h-2.8v2.5zm-3.4 0h2.8v-2.5h-2.8v2.5zm-3.4 0h2.8v-2.5H8.4v2.5zm3.4-3h2.8V8.8h-2.8v2.5zm3.4 0h2.8V8.8h-2.8v2.5zm3.4 0h2.8V8.8h-2.8v2.5zm0-3.1h2.8V5.8h-2.8v2.5zm3.4 3.1h2.8V8.8H22v2.5z"
        fill="#2496ED"
      />
      <path
        d="M31 15c-.9-.6-2.9-.8-4.4-.5-.2-1.4-1-2.7-2.5-3.8l-.8-.6-.6.9c-.7 1-1.1 2.5-1 3.9.1.5.2 1.5.8 2.3-.5.3-1.6.7-3.1.7H.8c-.4 2.1.2 4.8 1.7 6.7 1.4 1.8 3.5 2.7 6.2 2.7 5.9 0 10.3-2.7 12.3-7.7.8 0 2.5 0 3.4-1.7l.1-.1.8-1.5-1-.6-.3.2z"
        fill="#2496ED"
      />
    </svg>
  ),
  AWS: (
    <svg width="28px" height="28px" viewBox="0 -30 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M122.714 62.703c5.28-.643 16.924-2.027 18.997.643 2.072 2.621-2.319 13.649-4.293 18.544-.592 1.484.691 2.077 2.023.94 8.684-7.319 10.954-22.6 9.178-24.825-1.777-2.175-17.023-4.055-26.3 2.473-1.431 1.038-1.184 2.423.395 2.225z" fill="#F90"/>
  <path d="M74.852 89.456c20.28 0 43.865-6.38 60.099-18.396 2.664-1.978.345-4.994-2.369-3.758-18.207 7.714-37.993 11.473-56.003 11.473-26.694 0-52.5-7.368-73.42-19.533-1.827-1.088-3.208.791-1.679 2.176 19.343 17.505 44.951 28.038 73.372 28.038z" fill="#F90"/>
  <path d="M42.632 32.835c0 1.83.197 3.313.542 4.401a26.505 26.505 0 001.58 3.56c.246.396.345.792.345 1.138 0 .495-.296.99-.938 1.484l-3.108 2.077c-.444.296-.889.445-1.283.445-.494 0-.987-.248-1.48-.693a15.29 15.29 0 01-1.777-2.324 38.28 38.28 0 01-1.53-2.918c-3.848 4.55-8.684 6.825-14.506 6.825-4.145 0-7.45-1.187-9.868-3.56-2.418-2.374-3.652-5.54-3.652-9.495 0-4.204 1.48-7.616 4.49-10.187 3.01-2.572 7.007-3.857 12.09-3.857 1.677 0 3.404.148 5.23.395 1.825.248 3.7.643 5.674 1.088v-3.61c0-3.758-.79-6.379-2.32-7.912-1.578-1.533-4.243-2.274-8.042-2.274-1.727 0-3.503.197-5.329.642a39.247 39.247 0 00-5.329 1.682 14.14 14.14 0 01-1.727.643c-.345.098-.592.148-.79.148-.69 0-1.036-.494-1.036-1.533V6.577c0-.791.1-1.385.346-1.73.246-.347.69-.693 1.381-1.04 1.727-.89 3.8-1.631 6.217-2.225C20.23.94 22.797.642 25.51.642c5.872 0 10.164 1.336 12.927 4.006 2.714 2.67 4.096 6.726 4.096 12.165v16.022h.099zm-20.033 7.517c1.628 0 3.306-.297 5.082-.89 1.776-.594 3.355-1.682 4.687-3.165.79-.94 1.382-1.978 1.678-3.165.296-1.187.493-2.621.493-4.302v-2.077a41.135 41.135 0 00-4.539-.84 37.099 37.099 0 00-4.638-.298c-3.306 0-5.724.643-7.352 1.978-1.628 1.336-2.418 3.215-2.418 5.687 0 2.324.592 4.055 1.826 5.242 1.184 1.236 2.911 1.83 5.18 1.83zm39.621 5.34c-.888 0-1.48-.148-1.875-.494-.394-.297-.74-.99-1.036-1.929L47.714 5.044c-.296-.99-.444-1.632-.444-1.978 0-.791.394-1.236 1.184-1.236h4.835c.938 0 1.58.148 1.925.494.395.297.69.99.987 1.929l8.29 32.736 7.697-32.736c.246-.99.542-1.632.937-1.929.395-.297 1.085-.494 1.974-.494h3.947c.938 0 1.579.148 1.974.494.395.297.74.99.937 1.929l7.796 33.132L98.29 4.253c.295-.99.64-1.632.986-1.929.395-.297 1.036-.494 1.925-.494h4.588c.79 0 1.234.395 1.234 1.236 0 .247-.049.494-.099.791a7.041 7.041 0 01-.345 1.236L94.688 43.32c-.297.989-.642 1.631-1.037 1.928-.394.297-1.036.495-1.875.495h-4.243c-.938 0-1.58-.149-1.974-.495-.394-.346-.74-.989-.937-1.978l-7.648-31.895-7.599 31.846c-.247.989-.543 1.632-.938 1.978-.394.346-1.085.494-1.973.494H62.22zm63.405 1.336c-2.566 0-5.132-.297-7.599-.89-2.467-.594-4.391-1.237-5.674-1.979-.79-.445-1.332-.94-1.53-1.384a3.503 3.503 0 01-.296-1.385v-2.522c0-1.038.395-1.533 1.135-1.533.296 0 .592.05.888.148.296.1.74.297 1.234.495a26.791 26.791 0 005.428 1.73c1.973.396 3.898.594 5.871.594 3.109 0 5.527-.544 7.204-1.632 1.678-1.088 2.566-2.67 2.566-4.698 0-1.384-.444-2.521-1.332-3.461-.888-.94-2.566-1.78-4.984-2.571l-7.154-2.226c-3.602-1.137-6.267-2.818-7.895-5.044-1.628-2.176-2.467-4.599-2.467-7.17 0-2.077.444-3.907 1.332-5.489.888-1.582 2.072-2.967 3.553-4.055 1.48-1.137 3.157-1.978 5.131-2.571 1.974-.594 4.046-.841 6.217-.841 1.086 0 2.221.05 3.306.198 1.135.148 2.171.346 3.207.544.987.247 1.925.494 2.813.79.888.298 1.579.594 2.072.891.691.396 1.185.791 1.481 1.236.296.396.444.94.444 1.632V8.16c0 1.039-.395 1.583-1.135 1.583-.395 0-1.036-.198-1.875-.594-2.813-1.285-5.971-1.928-9.474-1.928-2.812 0-5.033.445-6.562 1.384-1.53.94-2.319 2.374-2.319 4.402 0 1.384.493 2.57 1.48 3.51s2.812 1.88 5.427 2.72l7.007 2.226c3.553 1.137 6.118 2.72 7.648 4.747 1.53 2.027 2.27 4.351 2.27 6.923 0 2.126-.444 4.055-1.283 5.736-.888 1.681-2.072 3.165-3.602 4.352-1.53 1.236-3.355 2.126-5.477 2.769-2.22.692-4.54 1.039-7.056 1.039z" fill="#FF9900"/>
</svg>
  ),
  PostgreSQL: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path
        d="M22.8 4.2c-2-.2-3.7.4-4.9 1.2a7 7 0 0 0-3.6-.9c-1.2 0-2.4.3-3.2.9-1.2-.6-2.8-1-4.2-.6-1.9.6-3.3 2.3-3.6 4.4-.6 3.1.5 7.2 2.2 9.9.7 1.3 1.8 2.6 3.1 2.6 1 0 1.5-.4 2.2-1 .5.2 1.1.4 1.8.4-.2.5-.3 1.1-.3 1.8v4.5c0 .9.7 1.6 1.6 1.6h4.2c.9 0 1.6-.7 1.6-1.6v-.3l.2 0c.9 0 1.6-.7 1.6-1.6v-2.6c0-.2.2-.5.5-.9.8-1 1.9-2.4 2.2-4.6.1-.8.1-1.6 0-2.4.9-1.1 1.5-2.2 1.5-3.7 0-3.1-1.4-6.1-3.9-6.8z"
        stroke="#336791"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="12" cy="12" r="1.3" fill="#336791" />
      <circle cx="19" cy="12" r="1.3" fill="#336791" />
    </svg>
  ),
  MongoDB: (
     <svg width="28" height="28"  viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg" fill="none"
    >
      <path
        d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"
        style={{ fill: "#13AA52" }}
      />
    </svg>
  ),
  "CI/CD": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle
        cx="8"
        cy="8"
        r="3.5"
        stroke="#06B6D4"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="24"
        cy="8"
        r="3.5"
        stroke="#06B6D4"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="16"
        cy="24"
        r="3.5"
        stroke="#06B6D4"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M8 11.5v4a3 3 0 0 0 3 3h3" stroke="#06B6D4" strokeWidth="1.5" />
      <path
        d="M24 11.5v4a3 3 0 0 1-3 3h-3"
        stroke="#06B6D4"
        strokeWidth="1.5"
      />
      <path d="M16 20.5v-3" stroke="#06B6D4" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="1.2" fill="#06B6D4" />
      <circle cx="24" cy="8" r="1.2" fill="#06B6D4" />
      <circle cx="16" cy="24" r="1.2" fill="#06B6D4" />
    </svg>
  ),
};

const skills = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  // { name: "Java", category: "Language" },
  { name: "SQL", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "CI/CD", category: "DevOps" },
];

export default function HeroSection({ onNavigate }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 tech-grid-bg opacity-40"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>

      {/* Floating Code Elements */}
      <div className="hidden lg:block absolute top-20 right-10 text-primary/20 font-mono text-sm animate-pulse">
        {"{ code }"}
      </div>
      <div className="hidden lg:block absolute bottom-40 left-10 text-primary/20 font-mono text-sm animate-pulse delay-300">
        {"</>"}
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight">
                Hi, I'm <span className="text-primary">Muhammad Ahsan</span>
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mt-2 font-semibold">
                Software Engineer
              </p>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm a Software Engineer with over{" "}
              <span className="text-primary font-semibold">3 years</span> of
              professional experience at{" "}
              <span className="text-primary font-semibold">
                Contact Software GmbH
              </span>{" "}
              and{" "}
              <span className="text-primary font-semibold">
                Netsol Technologies
              </span>
              . I specialize in building scalable web applications, RESTful
              APIs, and distributed systems using{" "}
              <span className="text-primary font-semibold">React</span>,{" "}
              <span className="text-primary font-semibold">Node.js</span>, and{" "}
              <span className="text-primary font-semibold">
                cloud architecture
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => onNavigate("projects")}
                className="bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg px-8 h-12 lg:h-14 text-base lg:text-lg glow-cyan transition-all"
              >
                <Code2 className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              {/* <Button
                asChild
                variant="outline"
                className="rounded-lg px-8 h-12 lg:h-14 text-base lg:text-lg border-primary/50 text-foreground hover:bg-primary/10 font-semibold"
              >
                <a href="/Muhammad_Ahsan-Resume.pdf" download>
                  <FileText className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button> */}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://github.com/muhahsan0626"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhahsan0626/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:muhahsan0626@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@ProgrammingWithAhsan"
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="Send Email"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl border-2 border-primary/40 shadow-2xl shadow-primary/20 overflow-hidden bg-card backdrop-blur-sm glow-cyan-subtle">
                <img
                  src="/profile_pic.jpeg"
                  alt="Muhammad Ahsan - Software Engineer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-primary/40 font-mono text-6xl">{ }</div>';
                    }
                  }}
                />
              </div>
              {/* Decorative Corner Element */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/10 border-2 border-primary rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-primary font-mono text-lg font-bold">
                  {"</>"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="bg-card/30 border border-primary/20 rounded-xl p-5 sm:p-6 lg:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3 sm:gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-1.5 p-3 sm:p-4 rounded-xl border border-primary/10 bg-secondary/40 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
              >
                <div className="opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-200">
                  {skillIcons[skill.name]}
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground text-center leading-tight">
                  {skill.name}
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground/70 font-mono">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
