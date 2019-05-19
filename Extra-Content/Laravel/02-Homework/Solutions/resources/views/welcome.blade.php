@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Welcome, Stranger!</div>

                <div class="panel-body">
                    <a href="/login">Login</a> or <a href="/register">register</a> to get started.
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
