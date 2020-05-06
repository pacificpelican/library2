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

	render() {
		return (
			<article id="lower_article" className="page_element">
				<h3 id="upload_h3">Upload</h3>
				<div>

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