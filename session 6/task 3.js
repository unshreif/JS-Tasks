for (let i = 1; i <= 6; i++) {
  const heading = document.createElement(`h${i}`);
  heading.textContent = `This is Heading ${i}`;
  document.body.appendChild(heading);
}
