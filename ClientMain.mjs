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
  document.querySelector("#Content").innerHTML = Text;
  
  document.querySelector("header > div").innerHTML = ["Specification", ...Path.split("/")].map(i => `<a>${i}</a>`).join("");
}

const Sections = [
  {
    "ID": "Introduction",
    "Name": "Introduction",
    "Content": [
      ["Introduction", "Introduction"]
    ]
  },
  {
    "ID": "TextFormat",
    "Name": "Text format",
    "Content": [
      ["LexicalFormat", "Lexical format"],
      ["Values", "Values"],
      ["InstructionFormats", "Instruction formats"]
    ]
  },
  {
    "ID": "BinaryFormat",
    "Name": "Binary format",
    "Content": []
  },
  {
    "ID": "Execution",
    "Name": "Execution",
    "Content": []
  },
  {
    "ID": "InstructionList",
    "Name": "List of instructions",
    "Content": [
      ["Overview", "Overview"],
      ["add", "add"],
      ["sub", "sub"],
      ["mul", "mul"],
      ["div", "div"],
      ["muln", "muln"],
      ["divn", "divn"]
    ]
  }
];

window.onload = function(){
  const RequestedPagePath = new URLSearchParams(window.location.search).get("page") ?? "Introduction/Introduction";
  LoadPage(RequestedPagePath);

  const SiteMapElement = document.querySelector("#SiteMap");

  for(const {ID, Name, Content} of Sections){
    const SectionWrapperElement = document.createElement("div");
    SiteMapElement.append(SectionWrapperElement);
    const SectionTitleElement = document.createElement("p");
    SectionWrapperElement.append(SectionTitleElement);
    const SubsectionsWrapperElement = document.createElement("div");
    SectionWrapperElement.append(SubsectionsWrapperElement);

    SectionTitleElement.addEventListener("click", function(){
      if(SectionWrapperElement.classList.contains("Open")){
        SectionWrapperElement.classList.remove("Open");
      } else{
        SectionWrapperElement.classList.add("Open")
      }
    });

    SectionTitleElement.innerText = Name;

    for(const [SubsectionID, SubsectionName] of Content){
      const SubsectionItemElement = document.createElement("p");
      SubsectionsWrapperElement.append(SubsectionItemElement);
      SubsectionItemElement.innerText = SubsectionName;

      SubsectionItemElement.addEventListener("click", function(){
        LoadPage(ID + "/" + SubsectionID);
      });

      
    }

    console.log(ID, Name, Content);
  }
};