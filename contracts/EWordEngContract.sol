// pragma solidity 0.8.4;
pragma solidity ^0.8.9;

contract EWordEngContract {

    event AddWord(address recipient, uint wordId);

    struct EWord {
        uint id;
        string engword;
        //string plword;
        string engword_explained;
        string engword_pronounciation;

    }

    EWord[] private ewords;

    mapping(uint256 => address) wordToOwner;

    // function addEWord(string memory engword, string memory plword) external {
    function addEWord(string memory engword, 
                      string memory engword_explained,
                      string memory engword_pronounciation) external {

        uint wordId = ewords.length;

        // ewords.push(EWord(wordId, engword, plword));
        ewords.push(EWord(wordId, engword, engword_explained, engword_pronounciation));
        wordToOwner[wordId] = msg.sender;

        emit AddWord(msg.sender, wordId);

    }

    function getEWords() external view returns(EWord[] memory) {
        EWord[] memory temporary = new EWord[](ewords.length);
        uint counter = 0;

        for (uint i = 0; i < ewords.length; i++) {

             temporary[counter] = ewords[i];
             counter ++;
        }

        EWord[] memory result = new EWord[](counter);

        for (uint i = 0; i < counter; i++) {

           result[i] = temporary[i];
        }

        return result;
    }

    // function getEngWord(uint256 wordid) external view returns (string memory) {
    //         return ewords[wordid].engword;
    // }



    //  function getEngWordPlWord(uint256 wordid) external view returns (string memory, string memory) {
    //        // return ewords[wordid].engword;
    //         return (ewords[wordid].engword, ewords[wordid].plword);
    // }

      function getEngWordEngExplainedAndPronounciation(uint256 wordid) external view returns (string memory, string memory, string memory) {
           // return ewords[wordid].engword;
          //  return (ewords[wordid].engword, ewords[wordid].plword);
            return (ewords[wordid].engword, ewords[wordid].engword_explained, ewords[wordid].engword_pronounciation);
    }

    // function getPlWord(uint256 wordid) external view returns (string memory) {
    //     return  ewords[wordid].plword;
    // }
}