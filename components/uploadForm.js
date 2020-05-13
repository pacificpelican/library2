//  depracated in v1.0.1

let username = '';

function uploadForm() {
  return (
    <div id="uploadContainer">
      <h3 id="bookUploadFormHeader">
        Book Upload Form
      </h3>
      <form id="bookUpload" action="/post">
        <article className="inputWrapper">
          <span className="formInputDescription">user name:</span> <input id="username" type="text" name="username" />
        </article>
        <article className="inputWrapper">
          <span className="formInputDescription">name of work:</span> <input id="name" type="text" name="title" />
        </article>
        <article className="inputWrapper">
          <span className="formInputDescription">(longer) title of work:</span> <input id="title" type="text" name="name" />
        </article>
        <article className="inputWrapper">
          <input type="file"
            id="file" name="file"
            accept=".epub, .pdf" />
        </article>
      </form>
      <style>
        {`
          article.inputWrapper {
            margin-bottom: calc(1pt + 1vh);
            margin-left: calc(1pt + 1vh);
          }
        `}
      </style>
  </div>
  )
}

export default uploadForm;