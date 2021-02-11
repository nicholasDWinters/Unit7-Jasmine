describe('payments and payments form testing', function () {

    beforeEach(function () {
        billAmtInput.value = 20;
        tipAmtInput.value = 4;
    })

    it('should add a new payment to allPayments on submitPaymentInfo()', () => {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('20');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('4');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(20);
    })

    it('should not add a new payment on submitPaymentInfo() with empty input', function () {
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should create a current payment', () => {
        let curPayment = createCurPayment();
        expect(curPayment.billAmt).toEqual('20');
        expect(curPayment.tipAmt).toEqual('4');
        expect(curPayment.tipPercent).toEqual(calculateTipPercent(curPayment.billAmt, curPayment.tipAmt));
    })

    it('should add a payment to the payments table', () => {
        let curPayment = createCurPayment();
        appendPaymentTable(curPayment);
        expect(paymentTbody.children[0].children.length).toEqual(4);
    })

    it('should not create payment with empty input on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();
        expect(curPayment).toEqual(undefined);
    });


    afterEach(function () {
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
    })



})