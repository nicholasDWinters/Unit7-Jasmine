describe('helpers testing', () => {

    beforeEach(function () {
        billAmtInput.value = 20;
        tipAmtInput.value = 4;
        submitPaymentInfo();
    });

    it('should sum total of tip amount on sumPaymentTotal()', () => {
        expect(sumPaymentTotal('tipAmt')).toEqual(4);

        billAmtInput.value = 10;
        tipAmtInput.value = 3;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(7)
    })

    it('should sum total of bill amount on sumPaymentTotal()', () => {
        expect(sumPaymentTotal('billAmt')).toEqual(20);

        billAmtInput.value = 10;
        tipAmtInput.value = 3;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(30)
    })

    it('should sum total of tip percentage on sumPaymentTotal()', () => {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 10;
        tipAmtInput.value = 3;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(50)
    })

    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
        expect(calculateTipPercent(100, 20)).toEqual(20);
        expect(calculateTipPercent(20, 5)).toEqual(25);
    });

    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should generate delete td and append to tr on appendDeleteBtn(tr)', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr, 'servers');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });

})