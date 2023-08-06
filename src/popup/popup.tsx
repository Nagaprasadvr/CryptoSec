import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
const test = (
  <>
    <div>
      <h1>Crypto Wallet</h1>
      <p>
        Create Symmetric Private and PublicKeys which can be used for Encryption
        and Decryption
      </p>
    </div>
  </>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
