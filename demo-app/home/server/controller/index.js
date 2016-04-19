/**
 * Created by jess on 16/4/15.
 */


'use strict';


class IndexController extends grape.ControllerBase {

    init(http){
        super.init(http);
    }

    listAction(){
        grape.log.info(`log file test`);
        this.http.res.end('IndexController.list');
    }


    async detailAction(){

        let result = await this.request('fund.getFundDetail', '270004');

        this.http.res.write( JSON.stringify(result) );

        this.http.res.end('IndexController.detail');
    }

}

module.exports = IndexController;