class Matrix{
    constructor(rows, cols){
        this.rows=rows;
        this.cols=cols;        
        this.data = [];

        for(let i=0;i<rows;i++){
            let arr=[]
            for(let j=0;j<cols;j++){
                arr.push(Math.floor(Math.random()*10))
            }
            this.data.push(arr);
        }        
    }   

    map(func){
        this.data = this.data.map((arr, i)=>{
            return arr.map((num, j) =>{
                return func(num, i, j);
            })
        })
        return this;
    }

    static add(A, B){
        var matrix = new Matrix(A.rows, B.cols);
        matrix.map((elm, i, j)=>{
            return A.data[i][j] + B.data[i][j];
        });
        return matrix;
    }

    static multiply(A, B){
        var matrix = new Matrix(A.rows, B.cols);
        var sum = 0
        matrix.map((num, i, j)=>{
            for(let k=0; k<B.rows;k++){
                let elm1 = A.data[i][k];
                let elm2 = B.data[k][j];
                sum += elm1 * elm2;
            }
            return sum;
        })
        return matrix;
    }

}