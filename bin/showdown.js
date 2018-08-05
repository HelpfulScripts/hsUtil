"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const showdown = require('showdown');
const converter = new showdown.Converter();
function markDown(text) {
    return converter.makeHtml(text);
}
exports.markDown = markDown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Rvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2hvd2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLFFBQVEsR0FBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFdEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7QUFNM0Msa0JBQXlCLElBQVc7SUFDaEMsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFGRCw0QkFFQyJ9