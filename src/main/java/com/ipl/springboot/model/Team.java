package com.ipl.springboot.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String teamName;
    private Long totalMatch;
    private Long totalWin;
    @Transient
    private List<Match> matches;

    public Team() {
    }

    public Team(String teamName, Long totalMatch) {
        this.teamName = teamName;
        this.totalMatch = totalMatch;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Long getTotalMatch() {
        return totalMatch;
    }

    public void setTotalMatch(Long totalMatch) {
        this.totalMatch = totalMatch;
    }

    public Long getTotalWin() {
        return totalWin;
    }

    public void setTotalWin(Long totalWin) {
        this.totalWin = totalWin;
    }

    public List<Match> getMatches() {
        return matches;
    }

    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }

    @Override
    public String toString() {
        return "Team{" +
                "teamName='" + teamName + '\'' +
                ", totalMatch=" + totalMatch +
                ", totalWin=" + totalWin +
                '}';
    }

}
