import React, { Component } from "react";

class Upload extends Component {
	constructor(props) {
		super(props);

		this.fileInput = React.createRef();
		this.input = React.createRef();
		this.input2 = React.createRef();
		this.input3 = React.createRef();
		this.input4 = React.createRef();
	}

	// state = { Ok: true, bookTitle: '', bookYear: '', bookUrl: '', bookUrl: '', bookFile: '' };

	// handleSubmitBook() {
	// 	event.preventDefault();
	// 	alert(
	// 		`Selected file - ${this.fileInput.current.files[0].name}`);
	// }

	// bookTitleU(event) {
	// 	console.log("updated value: " + event.target.value)
	// 	this.setState({ bookTitle: event.target.value });
	// }
	// bookYearU(event) {
	// 	console.log("updated value: " + event.target.value)
	// 	this.setState({ bookYear: event.target.value });
	// }
	// bookAuthorU(event) {
	// 	console.log("updated value: " + event.target.value)
	// 	this.setState({ bookAuthor: event.target.value });
	// }
	// bookUrlU(event) {
	// 	console.log("updated value: " + event.target.value)
	// 	this.setState({ bookUrl: event.target.value });
	// }
	// bookFileU(event) {
	// 	console.log("updated value: " + event.target.value)
	// 	this.setState({ bookFile: event.target.value });
	// }

	render() {
		return (
			<article id="lower_article" className="page_element">
				<h3 id="upload_h3">Upload</h3>
				<div>
					{/* <form id="uploadForm" action="http://localhost:3000/upload" method="post" encType="multipart/form-data">
						<input type="file" name="sampleFile" />
						<span className="upload_form_field top_sec" id="actorV">Actor 1: <input type="text" id="vActor1" name="vActor1" /></span>
						<span className="upload_form_field" id="yearV">Year: <input type="text" id="vYear" name="vYear" /></span>
						<span className="upload_form_field" id="descriptionV">Description: <input type="text" id="vDescription" name="vDescription" /></span>
						<span className="upload_form_field" id="nameV">Name: <input type="text" id="vName" name="vName" /></span>
						<span className="upload_form_field" id="actorV2">Actor 2: <input type="text" id="vActor2" name="vActor2" /></span>
						<input type="submit" value="Upload!" />
					</form> */}


					{/* <section className="expense-form"><span className="input-span">book title: </span><input required id="input-amount" value={this.state.bookTitle} onChange={this.bookTitleU} /></section>
						<section className="expense-form"><span className="input-span">book year: </span><input id="input-date" value={this.state.bookYear} onChange={this.bookYearU} /></section>
						<section className="expense-form"><span className="input-span">book url: </span><input id="payee-description" value={this.state.bookUrl} onChange={this.bookUrlU} /></section>
						<section className="expense-form"><span className="input-span">book author: </span><input required id="input-description" value={this.state.bookAuthor} onChange={this.bookAuthorU} /></section> */}

					<form id="expense" action="http://localhost:3000/upload" method="post" encType="multipart/form-data">
					<section className="expense-form"><span className="input-span">book title: </span><input required id="input-amount" type="text" ref={this.input} name="bookTitle" /></section>
						<section className="expense-form"><span className="input-span">book year: </span><input id="input-date" type="text" ref={this.input4} name="bookYear" /></section>
						<section className="expense-form"><span className="input-span">book url: </span><input id="payee-description" type="text" ref={this.input2} name="bookUrl" /></section>
						<section className="expense-form"><span className="input-span">book author: </span><input required id="input-description" type="text" ref={this.input3} name="bookAuthor" /></section>
						<section className="expense-form"><span className="input-span">book file: </span><input type="file" ref={this.fileInput} name="sampleFile" /></section>
						<input type="submit" value="Upload!" />
					</form>
				</div>
			</article>
		);
	}
}

export default Upload;