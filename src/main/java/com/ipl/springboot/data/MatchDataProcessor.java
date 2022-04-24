package com.ipl.springboot.data;

import com.ipl.springboot.model.Match;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;

import java.time.LocalDate;

public class MatchDataProcessor implements ItemProcessor<MatchData, Match> {

    private static final Logger log = LoggerFactory.
            getLogger(MatchDataProcessor.class);

    @Override
    public Match process(final MatchData matchData) throws Exception {
        /*final String firstName = person.getFirstName().toUpperCase();
        final String lastName = person.getLastName().toUpperCase();

        final Person transformedPerson = new Person(firstName, lastName);

        log.info("Converting (" + person + ") into (" + transformedPerson + ")");

        return transformedPerson;*/
        Match match = new Match();

        match.setId(Long.valueOf(matchData.getId()));
        match.setCity(matchData.getCity());
        match.setDate(LocalDate.parse(matchData.getDate()));

        match.setPlayerOfMatch(matchData.getPlayer_of_match());

        match.setVenue(matchData.getVenue());
        match.setNeutralVenue(matchData.getNeutral_venue());

        // set Team 1 and Team 2 depending on the innings order:
        String firstInningsTeam, secondInningsTeam;

        if("bat".equals(matchData.getToss_decision())){
            firstInningsTeam = matchData.getToss_winner();
            secondInningsTeam = matchData.getToss_winner().equals(matchData.getTeam1())?
                    matchData.getTeam2():matchData.getTeam1();
        }else {
            secondInningsTeam = matchData.getToss_winner();
            firstInningsTeam = matchData.getToss_winner().equals(matchData.getTeam1())?
                    matchData.getTeam2():matchData.getTeam1();
        }

        match.setTeam1(firstInningsTeam);
        match.setTeam2(secondInningsTeam);

        match.setTossWinner(matchData.getToss_winner());
        match.setTossDecision(matchData.getToss_decision());

        match.setMatchWinner(matchData.getWinner());

        match.setResult(matchData.getResult());
        match.setResultMargin(matchData.getResult_margin());

        match.setEliminator(matchData.getEliminator());
        match.setMethod(matchData.getMethod());

        match.setUmpire1(matchData.getUmpire1());
        match.setUmpire2(matchData.getUmpire2());

        return match;
    }

}
