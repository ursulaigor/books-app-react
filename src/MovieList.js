import React from 'react';
import './MovieList.css';


class MovieList extends React.Component {
  state = {
    search: "",
    data: []
  };

  searchBooks(){
    fetch('https://www.googleapis.com/books/v1/volumes?q='+encodeURIComponent(this.state.search))
          .then(response => response.json())
          .then(data => this.setState({ data: data.items }));
  }
  componentDidMount() {
    this.setState({
        search: "Harry potter"
    })
  }
  changeSearch($ev){
    console.log($ev.target.value);
    this.setState({
        search: $ev.target.value
    })
  }
  render() {
    return (
      <main>
        <div className="search-bar">
          <label>Search books: </label>
          <input type="text" value={this.state.search} placeholder="Book title" onChange={this.changeSearch.bind(this)}></input>
          <button onClick={this.searchBooks.bind(this)}>Search</button>
        </div>
        <div>
            {this.state.data.map(function(item){
                console.log(item.volumeInfo.title);
                return <div className="book">
                    <h4><a href={item.volumeInfo.previewLink} target="_new">{item.volumeInfo.title}</a></h4>
                    <img src={item.volumeInfo.imageLinks?item.volumeInfo.imageLinks.smallThumbnail:''} height="60"></img>
                    <p>{item.volumeInfo.description}</p>
                </div>   
            })}
        </div>
      </main>
    );  
  }
}

export default MovieList;