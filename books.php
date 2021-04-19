<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Books</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormSubmit();">  
            <div class="form-group row">
                <label for="Title" class="col-sm-4 col-form-label col-form-label-sm">Book Title:</label>
                <div class="col-sm-8">
                    <input type="text" name="Title" class="form-control form-control-sm" id="Title" placeholder="Book Title">
                </div>
            </div>
            <div class="form-group row">
                <label for="Genre" class="col-sm-4 col-form-label col-form-label-sm">Genre:</label>
                <div class="col-sm-8">
                    <select class="custom-select form-control-sm" name="Genre" id="Genre">
                        <option selected>Genre</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Poetry">Poetry</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="ISBN" class="col-sm-4 col-form-label col-form-label-sm">Book ISBN:</label>
                <div class="col-sm-8">
                    <input type="text" name="ISBN" class="form-control form-control-sm" id="ISBN" placeholder="Book ISBN">
                </div>
            </div>
            <div class="form-group row">
                <label for="Author" class="col-sm-4 col-form-label col-form-label-sm">Author:</label>
                <div class="col-sm-8">
                    <input type="text" name="Author" class="form-control form-control-sm" id="Author" placeholder="Author">
                </div>
            </div>
            <div class="form-group row">
                <label for="PublishDate" class="col-sm-4 col-form-label col-form-label-sm">Publish Date:</label>
                <div class="col-sm-8">
                    <input type="date" name="PublishDate" class="form-control form-control-sm" id="PublishDate" placeholder="col-form-label-sm">
                </div>
            </div>
            <div class="form-group row">
                <label for="NumberOfCopies" class="col-sm-4 col-form-label col-form-label-sm">Number of Copies:</label>
                <div class="col-sm-8">
                    <input type="text" name="NumberOfCopies" class="form-control form-control-sm" id="NumberOfCopies" placeholder="Number of Copies">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-8">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
    <div class="col-md-8">
        <div class="table-responsive">
            <table class="table table-striped table-sm" id="bookslist">
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Genre</th>
                        <th>Book ISBN</th>
                        <th>Author</th>
                        <th>Publish Date</th>
                        <th>Number of Copies</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Records Go In Here -->
                </tbody>
            </table>
        </div>
    </div>
</div>
