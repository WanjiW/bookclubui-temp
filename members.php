<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Members</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormSubmit();">
            <div class="form-group row">
                <label for="Name" class="col-sm-4 col-form-label col-form-label-sm">Name:</label>
                <div class="col-sm-8">
                    <input type="text" name="Name" class="form-control form-control-sm" id="Name" placeholder="Member Name">
                </div>
            </div>
            <div class="form-group row">
                <label for="Gender" class="col-sm-4 col-form-label col-form-label-sm">Gender</label>
                <div class="col-sm-8">
                    <select class="custom-select form-control-sm" name="Gender" id="Gender">
                        <option selected>Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="Email" class="col-sm-4 col-form-label col-form-label-sm">Email Address:</label>
                <div class="col-sm-8">
                    <input type="email" name="Email" class="form-control form-control-sm" id="Email" placeholder="Email Address">
                </div>
            </div>
            <div class="form-group row">
                <label for="PhoneNumber" class="col-sm-4 col-form-label col-form-label-sm">Phone no.:</label>
                <div class="col-sm-8">
                    <input type="text" name="PhoneNumber" class="form-control form-control-sm" id="PhoneNumber" placeholder="Telephone Number">
                </div>
            </div>
            <div class="form-group row">
                <label for="BirthDate" class="col-sm-4 col-form-label col-form-label-sm">Date of Birth:</label>
                <div class="col-sm-8">
                    <input type="date" name="BirthDate" class="form-control form-control-sm" id="BirthDate" placeholder="col-form-label-sm">
                </div>
            </div>
            <div class="form-group row">
                <label for="Address" class="col-sm-4 col-form-label col-form-label-sm">Address:</label>
                <div class="col-sm-8">
                    <input type="text" name="Address" class="form-control form-control-sm" id="Address" placeholder="Address">
                </div>
            </div>
            <div class="form-group row">
                <label for="ReferralID" class="col-sm-4 col-form-label col-form-label-sm">Ref. ID:</label>
                <div class="col-sm-8">
                    <input type="text" name="ReferralID" class="form-control form-control-sm" id="ReferralID" placeholder="Referral ID">
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
            <table class="table table-striped table-sm" id="memberslist">
                <thead>
                    <tr>
                        <th>Member ID</th>
                        <th>Member Name</th>
                        <th>Email Address</th>
                        <th>Phone No.</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>Ref. ID</th>
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