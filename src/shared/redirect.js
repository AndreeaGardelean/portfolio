const redirect = (element) => {
  const targetElement = document.getElementById(element);
  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
  
export default redirect;