import React, { useState, useEffect } from 'react';

const Content = () => {
  const link = "https://open.spotify.com/embed/track/";
  const [listSong, setListSong] = useState([]);
  const [song, setSong] = useState("");

  const handleAddSong = (e) => {
    e.preventDefault();
    setListSong([
      ...listSong,
      link + song
    ]);
    setSong("");
  };

  const handleDelete = (songDelete) => {
    setListSong((prev) => prev.filter((item) => item !== songDelete));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('');
        if (!response.ok) {
          throw new Error('Fetch failed');
        }
        const data = await response.json();
        const newSongList = data.map(item => link + item.songId);
        setListSong(newSongList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <div className="d-flex justify-content-center bg-dark text-white">
        <div className="row col-8 ">
          <h1>Playlist</h1>
          <form onSubmit={handleAddSong}>
            <label className="form-label fw-bold"> Track ID: </label>
            <div className="form-group d-flex align-items-center" style={{ height: "60px" }}>
              <input type="text" className="form-control me-2" value={song} onInput={(e) => setSong(e.target.value)} />
              <button type="submit" className="btn btn-sm btn-primary" style={{ height: "65%" }}>
                <i className="fa fa-plus ms-1 me-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <ul className="list-group mt-3 " >
          <div className="row ">
            {listSong.map((song, index) => (
              <div className="col-md-3 " key={index}>
                <li className="list-group-item border-0 d-flex">
                  <div className="custom-audio d-flex justify-content-between">
                    <iframe src={song} width="300" height="380" allowtransparency="true" allow="encrypted-media"></iframe>
                    <span
                      role="button"
                      className="fw-bolder text-danger"
                      onClick={() => handleDelete(song)}
                    >
                      &times;
                    </span>
                  </div>
                </li>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </>
  )
}

export default Content;
