import React, { Component } from "react";

class Upload extends Component {
	constructor(props) {
		super(props);

		this.fileInput = React.createRef();
		this.input = React.createRef();
		this.input2 = React.createRef();
		this.input3 = React.createRef();
		this.input4 = React.createRef();
		this.sparknotes = React.createRef();
	}

	render() {
		return (
			<article id="lower_article" className="page_element">
				<h3 id="upload_h3">Upload</h3>
				<div>

					<form id="expense" action="http://localhost:3020/upload" method="post" encType="multipart/form-data">
						<section className="expense-form"><span className="input-span">book file: </span><input required type="file" ref={this.fileInput} name="sampleFile" /></section>
						<section className="expense-form"><span className="input-span">book title: </span><input required id="input-amount" type="text" ref={this.input} name="bookTitle" /></section>
						<section className="expense-form"><span className="input-span">book year: </span><input id="input-date" type="text" ref={this.input4} name="bookYear" /></section>
						{/* <section className="bookNotesText"><span className="input-text">notes: </span><texarea id="notesAboutBook" ref={this.sparknotes} name="bookNotes" /></section> */}
						<section className="expense-form"><span className="input-span">book url: </span><input id="payee-description" type="text" ref={this.input2} name="bookUrl" /></section>
						<section className="expense-form"><span className="input-span">book author: </span><input id="input-description" type="text" ref={this.input3} name="bookAuthor" /></section>
						<aside id="bookNotesAside"><span>notes:</span> <textarea ref={this.sparknotes} name="bookNotes" /></aside>
						<input id="submitter" type="submit" value="Upload!" />
					</form>
				</div>
				<style>{`
					article#lower_article.page_element {
						margin-left: calc(1pt + 0.4vh + 2.5vw);
					}
					section.expense-form {
						height: calc(12pt + 7vh);
					}
					span.input-span, aside#bookNotesAside span {
						font-family: Hack, Fira Code, Anonymous Pro, Inconsolata, Menlo, monospace;
					
					}
					h3#upload_h3 {
						margin-top: calc(1pt + 0.4vh);
						margin-bottom: calc(1pt + 2.4vh);
						font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
						font-size: calc(1.4rem);
					}
					@media (max-width: 800px) {
						button {
							width: calc(30pt + 30vw);
							height: calc(25pt + 1vh);
							background: #f5f0f0;
						}
						form#expense input {
							width: calc(30pt + 27vw);
							height: calc(25pt + 1vh);
							font-size: calc(1.2rem);
							background: #f0f1f5;
							margin-bottom: calc(5pt + 1vh);
						}
						textarea {
							width: calc(10pt + 8vw);
							height: calc(25pt + 1vh);
							font-size: calc(1.2rem);
							background-color: #f0f5f4;
						}
						label#quantity {
							display: block;
						}
					}
					@media (min-width: 801px) {
						button {
							width: calc(30pt + 8vw);
							height: calc(25pt + 1vh);
						}
						form#expense input {
							width: calc(30pt + 18vw);
							height: calc(25pt + 1vh);
							font-size: calc(1.2rem);
							background: #f0f1f5;
						}
						textarea {
							width: calc(10pt + 33vw);
							height: calc(25pt + 12vh);
							font-size: calc(1.2rem);
							background-color: #f0f5f4;
						}
						input#submitter {
							margin-top: calc(5pt + 1vh);
						}
					}
				`}</style>
			</article>
		);
	}
}

export default Upload;