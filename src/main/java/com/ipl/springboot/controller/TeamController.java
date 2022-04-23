package com.ipl.springboot.controller;

import com.ipl.springboot.model.Match;
import com.ipl.springboot.model.Team;
import com.ipl.springboot.ripository.MatchRepository;
import com.ipl.springboot.ripository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
public class TeamController {

    private final TeamRepository teamRepository;
    private final MatchRepository matchRepository;

    @Autowired
    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team")
    public Iterable<Team> getAllTeam(){
        return this.teamRepository.findAll();
    }


    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable("teamName") String teamName){

        Team team = this.teamRepository.findByTeamName(teamName);

        //**Pageable pageable = PageRequest.of(0,4);

        //**team.setMatches(this.matchRepository.getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, pageable));

        team.setMatches(this.matchRepository.findLatestMatchesByTeam(teamName,4));

        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable("teamName") String teamName,
                                         @RequestParam int year){

        LocalDate startDate = LocalDate.of(year,1,1);
        LocalDate endDate = LocalDate.of(year+1,1,1);

        /*
         return this.matchRepository.getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
                teamName,
                startDate,
                endDate,
                teamName,
                startDate,
                endDate
        );*/

        return this.matchRepository.getMatchesByTeamBetweenDates(
                teamName,
                startDate,
                endDate
        );

    }
}
