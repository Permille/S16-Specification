const PageNotFound = `
  <h1>The page that you requested does not exist.</h1>
`;

async function LoadPage(Path){
  const Response = await fetch(`/api/${Path}`);
  let Text;
  if(!Response.ok){
    Text = PageNotFound;
  } else{
    Text = await Response.text();
  }
  document.querySelector("main").innerHTML = Text;
}

window.onload = function(){
  const RequestedPagePath = new URLSearchParams(window.location.search).get("page");
  LoadPage(RequestedPagePath);
};