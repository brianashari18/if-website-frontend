const Upload = () => {
    return (
        <section className="m-44 flex flex-col justify-between items-start gap-10">
            <input type="text" placeholder="Masukkan Judul"/>
            <input type="text" placeholder="Masukkan Sub Judul"/>
            <input type="text" placeholder="Masukkan Kategori"/>
            <input type="text" placeholder="Masukkan Tanggal Post"/>
            <input type="text" placeholder="Masukkan Deadline TP"/>
            <input type="text" placeholder="Masukkan Deskripsi TP"/>
            <input type="submit" value="Add Tp"/>
        </section>
    );
};

export default Upload;