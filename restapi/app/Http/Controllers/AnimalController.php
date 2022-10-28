<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    //buat property animals
    public $animals = ["Rusa", "Gajah", "Panda"];
    public function index()
    {
        echo "Menampilkan data animals" . "<br>";
        foreach ($this->animals as $animal) {
            echo "->" . $animal . "</br>";
        }
    }

    public function store(Request $request)
    //menambahkan hewan baru
    {
        echo "Menambahkan data animals";
        echo "<br>";
        $data = $request->only('animal');
        array_push($this->animals, $data['animal']);
        $this->index();
    }

    public function update(Request $request, $id)
    //mengupdate data hewan
    {
        echo "Mengupdate data animals index ke" . $id . "<br>";
        $data = $request->only('animal');
        $this->animals[$id] = $data['animal'];
        $this->index();
    }

    public function destroy($id)
    //menghapus data hewan
    {
        echo "Menghapus data animals index ke " . $id . "<br>";
        unset($this->animals[$id]);
        $this->index();
    }
}