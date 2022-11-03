<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    # method index - get all resources
    public function index()
    {
        # menggunakan model Student untuk select data
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students,
        ];

        # menggunakan response json laravel
        # otomatis set header content type json
        # otomatis mengubah data array ke JSON
        # mengatur status code
        return response()->json($data, 200);
    }

    # menambahkan resource student
    # membuat method store
    public function store(Request $request)
    {
        # menangkap data request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        # menggunakan Student untuk insert data
        $student = Student::create($input);

        $data = [
            'message' => 'Student is created successfully',
            'data' => $student,
        ];

        # mengembalikan data (json) status code 201
        return response()->json($data, 201);
    }
    # function update
    public function update(Request $request, $id)
    {
        $data = Student::find($id);
        $data->nama = $request->nama;
        $data->nim = $request->nim;
        $data->email = $request->email;
        $data->jurusan = $request->jurusan;

        $data->save();

        $hasil = [
            'message' => 'Student id $id successfully update',
            'data' => $data
        ];
        return response()->json($hasil);
    }
    
    # method destroy
    public function destroy($id)
    {
        Student::destroy($id);
        $result = [
            'message' => 'Student id $id successfully deleted',
            'data' => $this->index()
        ];

        return response()->json($result);
    }
}