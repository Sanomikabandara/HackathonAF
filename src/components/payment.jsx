import React, { Component } from 'react';
import './payment.css';

export default class PaymentComponent extends Component{


    render() {

        return (
            <div>
            <h3>Total Payable: LKR 3000.00</h3>
            <form>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Card Holder's Name</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Card Holder's Name" />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Card Number</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Card Number" />
                </div>
            </div>

            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">CVC</label>
                <div class="col-sm-10">
                <input type="number" class="form-control" id="inputEmail3" placeholder="CVC" />
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-2">Checkbox</div>
                <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">
                    I accept payment terms
                    </label>
                </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">Confirm Payment</button>
                </div>
            </div>
            </form>
            </div>
        );

    }

}