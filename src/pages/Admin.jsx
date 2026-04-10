import { useState } from "react";
import { supabase } from "../lib/supabase";

function Admin() {
  // --- AUTH STATE ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const ADMIN_USER = "adminTofiq";
  const ADMIN_PASS = "12345";

  // --- FORM STATE ---
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tiktokUrl, setTiktokUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [resetKey, setResetKey] = useState(Date.now());

  // Log İn control
  const handleLogin = (e) => {
    e.preventDefault();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      setIsLoggedIn(true);
    } else {
      alert("Yanlış istifadəçi adı və ya şifrə!");
    }
  };

  async function uploadFile(file, folder = "images") {
    const fileName = `${folder}/${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("products")
      .upload(fileName, file);

    if (error) {
      console.log("Upload error:", error);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from("products")
      .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let uploadedImageUrl = null;
    let videoUrl = null;

    if (imageFile) uploadedImageUrl = await uploadFile(imageFile, "images");
    if (videoFile) videoUrl = await uploadFile(videoFile, "videos");

    const { data, error } = await supabase.from("products").insert([
      {
        title,
        description,
        price: Number(price),
        category,
        stock: Number(stock),
        image_url: uploadedImageUrl || imageUrl,
        media: videoUrl,
        tiktok_url: tiktokUrl,
      },
    ]);

    if (error) {
      console.log(error);
      alert("❌ Error - Xəta");
    } else {
      alert("✅ Əlavə edildi!");
      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("");
      setStock("");
      setImageUrl("");
      setImageFile(null);
      setVideoFile(null);
      setTiktokUrl("");
      setResetKey(Date.now());
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl mb-6 text-center font-bold">Admin Girişi</h2>
          <div className="mb-4">
            <label className="block mb-1 text-sm">İstifadəçi Adı</label>
            <input
              className="w-full border p-2 rounded"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-sm">Şifrə</label>
            <input
              className="w-full border p-2 rounded"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
            Giriş Et
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen p-6">
      <div className="flex justify-between items-center max-w-md mx-auto mb-6">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded"
        >
          Çıxış
        </button>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label className="block mb-1">Məhsulun Adı</label>
          <input
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Xüsusiyyətləri</label>
          <input
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Qiyməti</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Kateqoriyası</label>
          <input
            className="w-full border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Anbardakı sayı</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Şəkil URL</label>
          <input
            className="w-full border p-2 rounded"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">TikTok URL</label>
          <input
            className="w-full border p-2 rounded"
            value={tiktokUrl}
            onChange={(e) => setTiktokUrl(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Şəkli</label>
          <input
            key={resetKey}
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>

        <div>
          <label className="block mb-1">Videosu</label>
          <input
            key={resetKey + 1}
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
          />
        </div>

        <button className="w-full bg-black text-white p-2 rounded font-bold">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Admin;
