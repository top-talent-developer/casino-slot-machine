const axios = require("axios");
const rand = require("random-seed").create();
require("dotenv").config();

// Users List
const usersPoints = {};

const CreateRandomNumber = async (user) => {
    for (var i = 0; i < 15; i++) {
        var rNum = rand.intBetween(1, 11);
        user.randomNum[i] = rNum;
    }
    for (var i = 0; i < 15; i++) {
        user.skeletonRandomNum[i] = user.randomNum[i] * -1;
    }
};

const calcMatch = (user, lines) => {
    for (var i = 1; i <= lines; i++) {
        var NumberStack = [];
        var money = 0;
        switch (i) {
            case 1:
                NumberStack.push(user.randomNum[9]);
                NumberStack.push(user.randomNum[8]);
                NumberStack.push(user.randomNum[7]);
                NumberStack.push(user.randomNum[6]);
                NumberStack.push(user.randomNum[5]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[9] = user.randomNum[9];
                    user.skeletonRandomNum[8] = user.randomNum[8];
                    user.skeletonRandomNum[7] = user.randomNum[7];
                    user.skeletonRandomNum[6] = user.randomNum[6];
                    user.skeletonRandomNum[5] = user.randomNum[5];
                    user.paylines.push(i);
                }
                break;
            case 2:
                NumberStack.push(user.randomNum[4]);
                NumberStack.push(user.randomNum[3]);
                NumberStack.push(user.randomNum[2]);
                NumberStack.push(user.randomNum[1]);
                NumberStack.push(user.randomNum[0]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[4] = user.randomNum[4];
                    user.skeletonRandomNum[3] = user.randomNum[3];
                    user.skeletonRandomNum[2] = user.randomNum[2];
                    user.skeletonRandomNum[1] = user.randomNum[1];
                    user.skeletonRandomNum[0] = user.randomNum[0];
                    user.paylines.push(i);
                }
                break;
            case 3:
                NumberStack.push(user.randomNum[14]);
                NumberStack.push(user.randomNum[13]);
                NumberStack.push(user.randomNum[12]);
                NumberStack.push(user.randomNum[11]);
                NumberStack.push(user.randomNum[10]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[14] = user.randomNum[14];
                    user.skeletonRandomNum[13] = user.randomNum[13];
                    user.skeletonRandomNum[12] = user.randomNum[12];
                    user.skeletonRandomNum[11] = user.randomNum[11];
                    user.skeletonRandomNum[10] = user.randomNum[10];
                    user.paylines.push(i);
                }
                break;
            case 4:
                NumberStack.push(user.randomNum[4]);
                NumberStack.push(user.randomNum[8]);
                NumberStack.push(user.randomNum[12]);
                NumberStack.push(user.randomNum[6]);
                NumberStack.push(user.randomNum[0]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[4] = user.randomNum[4];
                    user.skeletonRandomNum[8] = user.randomNum[8];
                    user.skeletonRandomNum[12] = user.randomNum[12];
                    user.skeletonRandomNum[6] = user.randomNum[6];
                    user.skeletonRandomNum[0] = user.randomNum[0];
                    user.paylines.push(i);
                }
                break;
            case 5:
                NumberStack.push(user.randomNum[14]);
                NumberStack.push(user.randomNum[8]);
                NumberStack.push(user.randomNum[2]);
                NumberStack.push(user.randomNum[6]);
                NumberStack.push(user.randomNum[10]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[14] = user.randomNum[14];
                    user.skeletonRandomNum[8] = user.randomNum[8];
                    user.skeletonRandomNum[2] = user.randomNum[2];
                    user.skeletonRandomNum[6] = user.randomNum[6];
                    user.skeletonRandomNum[10] = user.randomNum[10];
                    user.paylines.push(i);
                }
                break;
            case 6:
                NumberStack.push(user.randomNum[4]);
                NumberStack.push(user.randomNum[3]);
                NumberStack.push(user.randomNum[7]);
                NumberStack.push(user.randomNum[1]);
                NumberStack.push(user.randomNum[0]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[4] = user.randomNum[4];
                    user.skeletonRandomNum[3] = user.randomNum[3];
                    user.skeletonRandomNum[7] = user.randomNum[7];
                    user.skeletonRandomNum[1] = user.randomNum[1];
                    user.skeletonRandomNum[0] = user.randomNum[0];
                    user.paylines.push(i);
                }
                break;
            case 7:
                NumberStack.push(user.randomNum[14]);
                NumberStack.push(user.randomNum[13]);
                NumberStack.push(user.randomNum[7]);
                NumberStack.push(user.randomNum[11]);
                NumberStack.push(user.randomNum[10]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[14] = user.randomNum[14];
                    user.skeletonRandomNum[13] = user.randomNum[13];
                    user.skeletonRandomNum[7] = user.randomNum[7];
                    user.skeletonRandomNum[11] = user.randomNum[11];
                    user.skeletonRandomNum[10] = user.randomNum[10];
                    user.paylines.push(i);
                }
                break;
            case 8:
                NumberStack.push(user.randomNum[9]);
                NumberStack.push(user.randomNum[13]);
                NumberStack.push(user.randomNum[12]);
                NumberStack.push(user.randomNum[11]);
                NumberStack.push(user.randomNum[5]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[9] = user.randomNum[9];
                    user.skeletonRandomNum[13] = user.randomNum[13];
                    user.skeletonRandomNum[12] = user.randomNum[12];
                    user.skeletonRandomNum[11] = user.randomNum[11];
                    user.skeletonRandomNum[5] = user.randomNum[5];
                    user.paylines.push(i);
                }
                break;
            case 9:
                NumberStack.push(user.randomNum[9]);
                NumberStack.push(user.randomNum[3]);
                NumberStack.push(user.randomNum[2]);
                NumberStack.push(user.randomNum[1]);
                NumberStack.push(user.randomNum[5]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[9] = user.randomNum[9];
                    user.skeletonRandomNum[3] = user.randomNum[3];
                    user.skeletonRandomNum[2] = user.randomNum[2];
                    user.skeletonRandomNum[1] = user.randomNum[1];
                    user.skeletonRandomNum[5] = user.randomNum[5];
                    user.paylines.push(i);
                }
                break;
            case 10:
                NumberStack.push(user.randomNum[9]);
                NumberStack.push(user.randomNum[3]);
                NumberStack.push(user.randomNum[7]);
                NumberStack.push(user.randomNum[1]);
                NumberStack.push(user.randomNum[5]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[9] = user.randomNum[9];
                    user.skeletonRandomNum[3] = user.randomNum[3];
                    user.skeletonRandomNum[7] = user.randomNum[7];
                    user.skeletonRandomNum[1] = user.randomNum[1];
                    user.skeletonRandomNum[5] = user.randomNum[0];
                    user.paylines.push(i);
                }
                break;
            case 11:
                NumberStack.push(user.randomNum[9]);
                NumberStack.push(user.randomNum[13]);
                NumberStack.push(user.randomNum[7]);
                NumberStack.push(user.randomNum[11]);
                NumberStack.push(user.randomNum[5]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[9] = user.randomNum[9];
                    user.skeletonRandomNum[13] = user.randomNum[13];
                    user.skeletonRandomNum[7] = user.randomNum[7];
                    user.skeletonRandomNum[11] = user.randomNum[11];
                    user.skeletonRandomNum[5] = user.randomNum[5];
                    user.paylines.push(i);
                }
                break;
            case 12:
                NumberStack.push(user.randomNum[4]);
                NumberStack.push(user.randomNum[8]);
                NumberStack.push(user.randomNum[2]);
                NumberStack.push(user.randomNum[6]);
                NumberStack.push(user.randomNum[0]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[4] = user.randomNum[4];
                    user.skeletonRandomNum[8] = user.randomNum[8];
                    user.skeletonRandomNum[2] = user.randomNum[2];
                    user.skeletonRandomNum[6] = user.randomNum[6];
                    user.skeletonRandomNum[0] = user.randomNum[0];
                    user.paylines.push(i);
                }
                break;
            case 13:
                NumberStack.push(user.randomNum[14]);
                NumberStack.push(user.randomNum[8]);
                NumberStack.push(user.randomNum[12]);
                NumberStack.push(user.randomNum[6]);
                NumberStack.push(user.randomNum[10]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[14] = user.randomNum[14];
                    user.skeletonRandomNum[8] = user.randomNum[8];
                    user.skeletonRandomNum[12] = user.randomNum[12];
                    user.skeletonRandomNum[6] = user.randomNum[6];
                    user.skeletonRandomNum[10] = user.randomNum[10];
                    user.paylines.push(i);
                }
                break;
            case 14:
                NumberStack.push(user.randomNum[9]);
                NumberStack.push(user.randomNum[8]);
                NumberStack.push(user.randomNum[2]);
                NumberStack.push(user.randomNum[6]);
                NumberStack.push(user.randomNum[5]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[9] = user.randomNum[9];
                    user.skeletonRandomNum[8] = user.randomNum[8];
                    user.skeletonRandomNum[2] = user.randomNum[2];
                    user.skeletonRandomNum[6] = user.randomNum[6];
                    user.skeletonRandomNum[5] = user.randomNum[5];
                    user.paylines.push(i);
                }
                break;
            case 15:
                NumberStack.push(user.randomNum[9]);
                NumberStack.push(user.randomNum[8]);
                NumberStack.push(user.randomNum[12]);
                NumberStack.push(user.randomNum[6]);
                NumberStack.push(user.randomNum[5]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[9] = user.randomNum[9];
                    user.skeletonRandomNum[8] = user.randomNum[8];
                    user.skeletonRandomNum[12] = user.randomNum[12];
                    user.skeletonRandomNum[6] = user.randomNum[6];
                    user.skeletonRandomNum[5] = user.randomNum[5];
                    user.paylines.push(i);
                }
                break;
            case 16:
                NumberStack.push(user.randomNum[4]);
                NumberStack.push(user.randomNum[8]);
                NumberStack.push(user.randomNum[7]);
                NumberStack.push(user.randomNum[6]);
                NumberStack.push(user.randomNum[0]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[4] = user.randomNum[4];
                    user.skeletonRandomNum[8] = user.randomNum[8];
                    user.skeletonRandomNum[7] = user.randomNum[7];
                    user.skeletonRandomNum[6] = user.randomNum[6];
                    user.skeletonRandomNum[0] = user.randomNum[0];
                    user.paylines.push(i);
                }
                break;
            case 17:
                NumberStack.push(user.randomNum[14]);
                NumberStack.push(user.randomNum[8]);
                NumberStack.push(user.randomNum[7]);
                NumberStack.push(user.randomNum[6]);
                NumberStack.push(user.randomNum[10]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[14] = user.randomNum[14];
                    user.skeletonRandomNum[8] = user.randomNum[8];
                    user.skeletonRandomNum[7] = user.randomNum[7];
                    user.skeletonRandomNum[6] = user.randomNum[6];
                    user.skeletonRandomNum[10] = user.randomNum[10];
                    user.paylines.push(i);
                }
                break;
            case 18:
                NumberStack.push(user.randomNum[4]);
                NumberStack.push(user.randomNum[13]);
                NumberStack.push(user.randomNum[2]);
                NumberStack.push(user.randomNum[11]);
                NumberStack.push(user.randomNum[0]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[4] = user.randomNum[4];
                    user.skeletonRandomNum[13] = user.randomNum[13];
                    user.skeletonRandomNum[2] = user.randomNum[2];
                    user.skeletonRandomNum[11] = user.randomNum[11];
                    user.skeletonRandomNum[0] = user.randomNum[0];
                    user.paylines.push(i);
                }
                break;
            case 19:
                NumberStack.push(user.randomNum[4]);
                NumberStack.push(user.randomNum[13]);
                NumberStack.push(user.randomNum[12]);
                NumberStack.push(user.randomNum[11]);
                NumberStack.push(user.randomNum[0]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[4] = user.randomNum[4];
                    user.skeletonRandomNum[13] = user.randomNum[13];
                    user.skeletonRandomNum[12] = user.randomNum[12];
                    user.skeletonRandomNum[11] = user.randomNum[11];
                    user.skeletonRandomNum[0] = user.randomNum[0];
                    user.paylines.push(i);
                }
                break;
            case 20:
                NumberStack.push(user.randomNum[14]);
                NumberStack.push(user.randomNum[3]);
                NumberStack.push(user.randomNum[2]);
                NumberStack.push(user.randomNum[1]);
                NumberStack.push(user.randomNum[10]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[14] = user.randomNum[14];
                    user.skeletonRandomNum[3] = user.randomNum[3];
                    user.skeletonRandomNum[2] = user.randomNum[2];
                    user.skeletonRandomNum[1] = user.randomNum[1];
                    user.skeletonRandomNum[10] = user.randomNum[10];
                    user.paylines.push(i);
                }
                break;
            case 21:
                NumberStack.push(user.randomNum[14]);
                NumberStack.push(user.randomNum[3]);
                NumberStack.push(user.randomNum[12]);
                NumberStack.push(user.randomNum[1]);
                NumberStack.push(user.randomNum[10]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[14] = user.randomNum[14];
                    user.skeletonRandomNum[3] = user.randomNum[3];
                    user.skeletonRandomNum[12] = user.randomNum[12];
                    user.skeletonRandomNum[1] = user.randomNum[1];
                    user.skeletonRandomNum[10] = user.randomNum[10];
                    user.paylines.push(i);
                }
                break;
            case 22:
                NumberStack.push(user.randomNum[4]);
                NumberStack.push(user.randomNum[3]);
                NumberStack.push(user.randomNum[12]);
                NumberStack.push(user.randomNum[1]);
                NumberStack.push(user.randomNum[0]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[4] = user.randomNum[4];
                    user.skeletonRandomNum[3] = user.randomNum[3];
                    user.skeletonRandomNum[12] = user.randomNum[12];
                    user.skeletonRandomNum[1] = user.randomNum[1];
                    user.skeletonRandomNum[0] = user.randomNum[0];
                    user.paylines.push(i);
                }
                break;
            case 23:
                NumberStack.push(user.randomNum[14]);
                NumberStack.push(user.randomNum[13]);
                NumberStack.push(user.randomNum[2]);
                NumberStack.push(user.randomNum[11]);
                NumberStack.push(user.randomNum[10]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[14] = user.randomNum[14];
                    user.skeletonRandomNum[13] = user.randomNum[13];
                    user.skeletonRandomNum[2] = user.randomNum[2];
                    user.skeletonRandomNum[11] = user.randomNum[11];
                    user.skeletonRandomNum[10] = user.randomNum[10];
                    user.paylines.push(i);
                }
                break;
            case 24:
                NumberStack.push(user.randomNum[4]);
                NumberStack.push(user.randomNum[3]);
                NumberStack.push(user.randomNum[7]);
                NumberStack.push(user.randomNum[11]);
                NumberStack.push(user.randomNum[0]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[4] = user.randomNum[4];
                    user.skeletonRandomNum[3] = user.randomNum[3];
                    user.skeletonRandomNum[7] = user.randomNum[7];
                    user.skeletonRandomNum[11] = user.randomNum[11];
                    user.skeletonRandomNum[0] = user.randomNum[0];
                    user.paylines.push(i);
                }
                break;
            case 25:
                NumberStack.push(user.randomNum[14]);
                NumberStack.push(user.randomNum[3]);
                NumberStack.push(user.randomNum[7]);
                NumberStack.push(user.randomNum[1]);
                NumberStack.push(user.randomNum[10]);
                money = countCheck(NumberStack, user);
                if (money > 0) {
                    user.skeletonRandomNum[4] = user.randomNum[4];
                    user.skeletonRandomNum[3] = user.randomNum[3];
                    user.skeletonRandomNum[7] = user.randomNum[7];
                    user.skeletonRandomNum[1] = user.randomNum[1];
                    user.skeletonRandomNum[10] = user.randomNum[10];
                    user.paylines.push(i);
                }
                break;
        }
        user.totalMoney += money;
    }
};

const countCheck = (randomArray, user) => {
    var setNum = 0;
    for (var i = 0; i < randomArray.length; i++) {
        var bump = randomArray[i];
        var count = 0;
        for (var j = 0; j < randomArray.length; j++) {
            if (bump === randomArray[j] || Math.abs(bump) === 11) {
                count++;
            }
        }
        if (count >= 3) {
            setNum = randomArray[i];
            break;
        }
    }

    return levelCheck(setNum, count, user);
};

const levelCheck = (number, count, user) => {
    var money = 0;
    switch (number) {
        case 1:
            if (count === 3) money = 50 * user.betBalance;
            if (count === 4) money = 400 * user.betBalance;
            if (count === 5) money = 4000 * user.betBalance;
            break;
        case 2:
            if (count === 3) money = 40 * user.betBalance;
            if (count === 4) money = 200 * user.betBalance;
            if (count === 5) money = 2000 * user.betBalance;
            break;
        case 3:
            if (count === 3) money = 30 * user.betBalance;
            if (count === 4) money = 150 * user.betBalance;
            if (count === 5) money = 500 * user.betBalance;
            break;
        case 4:
            if (count === 3) money = 20 * user.betBalance;
            if (count === 400) money = 100 * user.betBalance;
            if (count === 5) money = 400 * user.betBalance;
            break;
        case 5:
        case 6:
            if (count === 3) money = 15 * user.betBalance;
            if (count === 400) money = 75 * user.betBalance;
            if (count === 5) money = 300 * user.betBalance;
            break;
        case 7:
        case 8:
            if (count === 3) money = 10 * user.betBalance;
            if (count === 400) money = 50 * user.betBalance;
            if (count === 5) money = 250 * user.betBalance;
            break;
        case 9:
        case 10:
            if (count === 3) money = 5 * user.betBalance;
            if (count === 400) money = 25 * user.betBalance;
            if (count === 5) money = 200 * user.betBalance;
            break;
        default:
            break;
    }
    return money;
};

module.exports = {
    StartSignal: async (req, res) => {
        try {
            const { token, totalBet, betValue, betLine } = req.body;

            console.log("token: ", token);

            let user = usersPoints[token];
            if (user === undefined) {
                usersPoints[token] = {
                    totalMoney: 0,
                    randomNum: [],
                    skeletonRandomNum: [],
                    paylines: [],
                    betBalance: 0,
                };
                user = usersPoints[token];
            }
            user.betBalance = betValue;

            await CreateRandomNumber(user);
            await calcMatch(user, parseInt(betLine));

            try {
                // await axios.post(
                //     process.env.PLATFORM_SERVER + "api/games/bet",
                //     {
                //         token: token,
                //         amount: totalBet,
                //     }
                // );

                // await axios.post(
                //     process.env.PLATFORM_SERVER + "api/games/winlose",
                //     {
                //         token: token,
                //         amount: user.totalMoney,
                //         winState: user.totalMoney ? true : false,
                //     }
                // );
            } catch (err) {
                console.log(err);
                res.json({
                    status: false,
                });
            }

            res.json({
                status: true,
                winpaylines: user.paylines,
                randomNums: user.skeletonRandomNum,
                moneyResult: user.totalMoney,
            });

            user.totalMoney = 0;
            user.paylines = [];
            user.betBalance = 0;
        } catch (err) {
            console.log(err);
            res.json({
                status: false,
            });
        }
    },
};
